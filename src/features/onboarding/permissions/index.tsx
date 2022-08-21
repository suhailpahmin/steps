import React from 'react';
import {View} from 'react-native';

import {Button, ButtonType, Container, SafeArea, Text, TextSize} from '@ui';
import {useAppDispatch, useAppSelector, useViewportUnits} from '@hooks';

import HealthKitInfo from './healthKitInfo';
import styles from './permissions.styles';

import {cwButtons} from '../../../components/configs';
import {cwPermissions} from '../../../components/configs/copywriting';
import {getHKStepCount} from '../../../app/providers/healthkit';
import {
  getHealthPermission,
  setHealthPermission,
  setSteps,
} from '../../../app/redux/slices/fitness';
import {setFirstTime} from '../../..//app/redux/slices/user';

const SetPermissionsScreen = () => {
  const {vh} = useViewportUnits();
  const dispatch = useAppDispatch();
  const isHKEnabled = useAppSelector(getHealthPermission);

  const _onAllow = () => getHKStepCount(_setSteps);

  const _setSteps = (allowed: boolean, steps: number, error: string) => {
    if (error !== '') {
      // Display error
      console.log('[ERROR - Get HealthKit Steps]', error);
      return;
    }

    dispatch(setSteps(steps));
    dispatch(setHealthPermission(allowed));
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
          <HealthKitInfo />
        </View>
        {isHKEnabled ? (
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
