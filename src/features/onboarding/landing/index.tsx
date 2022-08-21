import React from 'react';
import {Image, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Images} from '@assets';
import {Container, Text, TextSize, SafeArea, Button, ButtonType} from '@ui';
import {useViewportUnits} from '@hooks';

import styles from './landing.styles';
import {
  cwOnboardingLanding,
  OnboardingRouters,
} from '../../../components/configs';

const LandingScreen = () => {
  const navigation = useNavigation();
  const {vh, vw} = useViewportUnits();

  const _navigateToOnboarding = () => {
    navigation.navigate(OnboardingRouters.steps);
  };

  return (
    <SafeArea>
      <Container style={styles(vh).container}>
        <Image style={styles(vh).appLogo} source={Images.appIcon} />
        <Text bold size={TextSize.MD} style={styles(vh).appTitle}>
          {cwOnboardingLanding.appTitle}
        </Text>
        <View style={styles(vh).headlineContainer}>
          <Text style={styles(vh).headline}>
            {cwOnboardingLanding.headline}
          </Text>
          <Text bold size={TextSize.MD}>
            {cwOnboardingLanding.subHeadline}
          </Text>
          <Button
            type={ButtonType.PRIMARY}
            style={styles(vh, vw).button}
            label={cwOnboardingLanding.buttonLabel}
            onPress={_navigateToOnboarding}
          />
        </View>
      </Container>
    </SafeArea>
  );
};

export default LandingScreen;
