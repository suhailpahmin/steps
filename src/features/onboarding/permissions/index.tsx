import {Button, ButtonType, Container, SafeArea, Text, TextSize} from '@ui';
import PermissionInfo, {Permission} from './permissionInfo';
import React, {useEffect, useState} from 'react';
import {getCoords, setCoords} from '../../../app/redux/slices/location';
import {
  getHealthPermission,
  setHealthPermission,
  setSteps,
} from '../../../app/redux/slices/fitness';
import {useAppDispatch, useAppSelector, useViewportUnits} from '@hooks';

import Geolocation from 'react-native-geolocation-service';
import {View} from 'react-native';
import {cwButtons} from '../../../components/configs';
import {cwPermissions} from '../../../components/configs/copywriting';
import {getHKStepCount} from '../../../app/providers/healthkit';
import {getLocation} from '../../../app/providers/location/location';
import {setFirstTime} from '../../../app/redux/slices/user';
import styles from './permissions.styles';

const SetPermissionsScreen = () => {
  const {vh} = useViewportUnits();
  const dispatch = useAppDispatch();
  const [allowed, setAllowed] = useState(false);
  const isHKEnabled = useAppSelector(getHealthPermission);
  const hasLocation = useAppSelector(getCoords);

  useEffect(() => {
    if (isHKEnabled && hasLocation) {
      setAllowed(true);
    }
  }, [hasLocation, isHKEnabled]);

  const _retrievedLocation = (location?: Geolocation.GeoPosition | null) => {
    if (location == null) {
      return;
    }

    const locationCoords = location.coords;
    dispatch(
      setCoords({
        longitude: locationCoords.longitude,
        latitude: locationCoords.latitude,
      }),
    );
  };

  const _onAllow = async () => {
    getHKStepCount(_setSteps);
    await getLocation(_retrievedLocation);
  };

  const _setSteps = (isAllowed: boolean, steps: number, error: string) => {
    if (error !== '') {
      // Display error
      console.log('[ERROR - Get HealthKit Steps]', error);
      return;
    }

    dispatch(setSteps(steps));
    dispatch(setHealthPermission(isAllowed));
  };

  const _onComplete = () => dispatch(setFirstTime(false));

  return (
    <SafeArea>
      <Container style={styles(vh).container}>
        <View>
          <Text bold size={TextSize.LG}>
            {cwPermissions.title}
          </Text>
          <Text style={styles().subtitle}>{cwPermissions.subtitle}</Text>
          <PermissionInfo permission={Permission.HEALTH_KIT} />
          <PermissionInfo permission={Permission.LOCATION} />
        </View>
        {allowed ? (
          <Button
            type={ButtonType.PRIMARY}
            label={cwButtons.done}
            onPress={_onComplete}
          />
        ) : (
          <Button
            type={ButtonType.PRIMARY}
            label={cwButtons.allow}
            onPress={_onAllow}
          />
        )}
      </Container>
    </SafeArea>
  );
};

export default SetPermissionsScreen;
