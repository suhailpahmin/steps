import React from 'react';
import {Image, View} from 'react-native';

import {Images} from '@assets';
import {Container, Text, TextSize, SafeArea, Button, ButtonType} from '@ui';
import {useViewportUnits} from '@hooks';

import styles from './landing.styles';
import {useNavigation} from '@react-navigation/native';
import {onboardingLanding} from '../../../components/configs';

const LandingScreen = () => {
  const navigation = useNavigation();
  const {vh, vw} = useViewportUnits();

  const _navigateToOnboarding = () => {
    navigation.navigate('OnboardingSteps');
  };

  return (
    <SafeArea>
      <Container style={styles(vh).container}>
        <Image style={styles(vh).appLogo} source={Images.appIcon} />
        <Text bold size={TextSize.MD}>
          {onboardingLanding.appTitle}
        </Text>
        <View style={styles(vh).headlineContainer}>
          <Text size={TextSize.SM}>{onboardingLanding.headline}</Text>
          <Text bold size={TextSize.MD}>
            {onboardingLanding.subHeadline}
          </Text>
          <Button
            type={ButtonType.PRIMARY}
            style={styles(vh, vw).button}
            label={onboardingLanding.buttonLabel}
            onPress={_navigateToOnboarding}
          />
        </View>
      </Container>
    </SafeArea>
  );
};

export default LandingScreen;
