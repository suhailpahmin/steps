import React from 'react';
import {Image, View} from 'react-native';

import {Images} from '@assets';
import {Container, Text, TextSize, SafeArea, Button, ButtonType} from '@ui';
import {useViewportUnits} from '@hooks';

import styles from './landing.styles';
import {useNavigation} from '@react-navigation/native';

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
          STEPS
        </Text>
        <View style={styles(vh).headlineContainer}>
          <Text size={TextSize.SM}>Track Your Steps</Text>
          <Text bold size={TextSize.MD}>
            at Your Fingertip
          </Text>
          <Button
            type={ButtonType.PRIMARY}
            style={styles(vh, vw).button}
            label={'Get Started'}
            onPress={_navigateToOnboarding}
          />
        </View>
      </Container>
    </SafeArea>
  );
};

export default LandingScreen;
