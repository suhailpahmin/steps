import React from 'react';
import {View, ImageBackground} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {
  SafeArea,
  Container,
  Text,
  TextSize,
  OnboardTicker,
  Button,
  ButtonType,
} from '@ui';
import {Images} from '@assets';
import {useAppDispatch, useAppSelector, useViewportUnits} from '@hooks';

import styles from './onboardingSteps.styles';
import {getStep, increment} from '../onboardingSlice';

const OnboardingSteps = () => {
  const {vh} = useViewportUnits();
  const step = useAppSelector(getStep);
  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  const _onNext = () => {
    if (step !== 3) {
      dispatch(increment());
    } else {
      navigation.navigate('Home');
    }
  };

  return (
    <SafeArea>
      <ImageBackground style={styles(vh).image} source={Images.stepOne}>
        <View style={styles(vh).overlay} />
      </ImageBackground>
      <Container style={styles(vh).wrapper}>
        <View>
          <Text size={TextSize.MD}>24x7 Activity Tracker</Text>
          <Text style={styles(vh).subHeadline}>
            Keep on track with your fitness activity at all times.
          </Text>
        </View>
        <View style={styles(vh).footer}>
          <OnboardTicker step={step} />
          <Button
            style={styles(vh).button}
            type={ButtonType.PRIMARY}
            onPress={_onNext}
            label={'Next'}
          />
        </View>
      </Container>
    </SafeArea>
  );
};

export default OnboardingSteps;
