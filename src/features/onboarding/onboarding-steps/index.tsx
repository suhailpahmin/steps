import React, {useEffect, useState} from 'react';
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

import {
  cwOnboardingHeadline,
  OnboardingRouters,
  cwOnboardingSubheadline,
} from '../../../components/configs';

const OnboardingSteps = () => {
  const {vh} = useViewportUnits();
  const step = useAppSelector(getStep);
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const [headline, setHeadline] = useState(cwOnboardingHeadline.stepOne);
  const [subHeadline, setSubheadline] = useState(
    cwOnboardingSubheadline.stepOne,
  );
  const [image, setImage] = useState(Images.stepOne);
  const [buttonLabel, setButtonLabel] = useState('Next');

  const _onNext = () => {
    if (step !== 3) {
      dispatch(increment());
    } else {
      navigation.navigate(OnboardingRouters.personalize);
    }
  };

  useEffect(() => {
    switch (step) {
      case 1:
        setHeadline(cwOnboardingHeadline.stepOne);
        setSubheadline(cwOnboardingSubheadline.stepTwo);
        setImage(Images.stepOne);
        setButtonLabel('Next');
        break;
      case 2:
        setHeadline(cwOnboardingHeadline.stepTwo);
        setSubheadline(cwOnboardingSubheadline.stepTwo);
        setImage(Images.stepTwo);
        setButtonLabel('Next');
        break;
      case 3:
        setHeadline(cwOnboardingHeadline.stepThree);
        setSubheadline(cwOnboardingSubheadline.stepThree);
        setImage(Images.stepThree);
        setButtonLabel("LET'S GO");
        break;
    }
  }, [step]);

  return (
    <SafeArea>
      <ImageBackground style={styles(vh).image} source={image}>
        <View style={styles(vh).overlay} />
      </ImageBackground>
      <Container style={styles(vh).wrapper}>
        <View>
          <Text size={TextSize.MD}>{headline}</Text>
          <Text style={styles(vh).subHeadline}>{subHeadline}</Text>
        </View>
        <View style={styles(vh).footer}>
          <OnboardTicker step={step} />
          <Button
            style={styles(vh).button}
            type={ButtonType.PRIMARY}
            onPress={_onNext}
            label={buttonLabel}
          />
        </View>
      </Container>
    </SafeArea>
  );
};

export default OnboardingSteps;
