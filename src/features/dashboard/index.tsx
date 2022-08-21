import React, {useEffect} from 'react';
import {View} from 'react-native';

import * as Progress from 'react-native-progress';
import {useDispatch} from 'react-redux';

import {useAppSelector, useDateHelper, useViewportUnits} from '@hooks';
import {Container, SafeArea, Text, TextSize} from '@ui';

import {
  getGoals,
  getSteps,
  setHealthPermission,
  setSteps,
} from '../../app/redux/slices/fitness';
import {colors} from '../../components/configs';
import styles from './dashboard.styles';
import {getHKStepCount} from '../../app/providers/healthkit';

const DashboardScreen = () => {
  const {today} = useDateHelper();
  const {vh} = useViewportUnits();
  const dispatch = useDispatch();
  const steps = useAppSelector(getSteps);
  const goals = useAppSelector(getGoals);

  useEffect(() => {
    getHKStepCount(_setSteps);
  });

  const _setSteps = (allowed: boolean, stepCount: number, error: string) => {
    if (error !== '') {
      // Display error
      console.log('[ERROR - Get HealthKit Steps]', error);
      return;
    }
    console.log('Steps ', stepCount);
    dispatch(setSteps(stepCount));
    dispatch(setHealthPermission(allowed));
  };

  return (
    <SafeArea>
      <Container style={styles(vh).container}>
        <View style={styles(vh).innerRingContainer}>
          <Text bold size={TextSize.MD}>
            {today}
          </Text>
          <Text bold style={styles().steps}>
            {steps}
          </Text>
          <Text bold size={TextSize.MD}>
            Steps Goal : {goals}
          </Text>
        </View>
        <Progress.Circle
          style={styles().progress}
          progress={0.3}
          size={vh * 40}
          indeterminate={false}
          color={colors.primary}
          unfilledColor={colors.secondary}
          animated
          strokeCap="round"
        />
      </Container>
    </SafeArea>
  );
};

export default DashboardScreen;