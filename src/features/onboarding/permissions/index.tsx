import React from 'react';
import {View} from 'react-native';
import AppleHealthKit, {
  HealthInputOptions,
  HealthValue,
} from 'react-native-health';

import {appleHealthKitOptions} from '../../../components/configs';

import {Button, ButtonType, Container, SafeArea, Text, TextSize} from '@ui';
import {useAppDispatch, useViewportUnits} from '@hooks';

import HealthKitInfo from './healthKitInfo';

import {
  initHKStepCount,
  initHKTotalSteps,
} from '../../../app/providers/healthkit';
import styles from './permissions.styles';
import {
  fetchStepCount,
  setHealthPermission,
  setSteps,
} from 'src/app/redux/slices/fitness';
import {cwButtons} from '../../../components/configs';
import {cwPermissions} from '../../../components/configs/copywriting';

const SetPermissionsScreen = () => {
  const {vh} = useViewportUnits();
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   console.log('Count ', stepCountHK);
  // });

  const _getHKStepCount = () => {
    AppleHealthKit.initHealthKit(appleHealthKitOptions, (error: string) => {
      var response = {
        allowed: false,
        steps: 0,
        error: '',
      };

      if (error) {
        response.allowed = false;
      }

      // HealthKit Initialized. Can now read and write
      response.allowed = true;
      dispatch(setHealthPermission(response.allowed));

      const options: HealthInputOptions = {
        date: new Date().toISOString(),
        includeManuallyAdded: false,
      };

      AppleHealthKit.getStepCount(
        options,
        (err: Object, results: HealthValue) => {
          if (err) {
            //@ts-ignore
            error = err.message;
          }
          response.steps = results.value;
          dispatch(setSteps(results.value));
        },
      );
    });
  };

  const _onAllow = () => {
    _getHKStepCount();
  };

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
        <Button
          type={ButtonType.PRIMARY}
          label={cwButtons.allow}
          onPress={_onAllow}
        />
      </Container>
    </SafeArea>
  );
};

export default SetPermissionsScreen;
