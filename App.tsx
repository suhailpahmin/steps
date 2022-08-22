/**
 * @format
 */
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {useAppSelector, useDateHelper} from '@hooks';

import {
  getWalkingSamples,
  initHKListener,
  updateHKSteps,
} from './src/app/providers/healthkit';
import HomeScreen from './src/features/home';
import LandingScreen from './src/features/onboarding/landing';
import OnboardingSteps from './src/features/onboarding/onboarding-steps';
import PersonalizationScreen from './src/features/onboarding/personalize';
import SetPermissionsScreen from './src/features/onboarding/permissions';
import {HomeRouters, OnboardingRouters} from './src/components/configs';
import {getFirstTime} from './src/app/redux/slices/user';

const Stack = createNativeStackNavigator();

const App = () => {
  const firstTime = useAppSelector(getFirstTime);

  const newStep = (): void => {
    const {firstDate, lastDate} = useDateHelper();
    getWalkingSamples(firstDate, lastDate);
  };

  const stepUpdate = (): void => {
    const {firstDate, lastDate} = useDateHelper();
    console.log('Walking Steps');
    getWalkingSamples(firstDate, lastDate);
  };

  const _startListeningHK = () => {
    initHKListener(newStep);
    updateHKSteps(stepUpdate);
  };

  useEffect(() => {
    _startListeningHK();
  });

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {firstTime ? (
          <Stack.Group screenOptions={{headerShown: false}}>
            <Stack.Screen
              name={OnboardingRouters.landing}
              component={LandingScreen}
            />
            <Stack.Screen
              name={OnboardingRouters.steps}
              component={OnboardingSteps}
            />
            <Stack.Screen
              name={OnboardingRouters.personalize}
              component={PersonalizationScreen}
            />
            <Stack.Screen
              name={OnboardingRouters.permissions}
              component={SetPermissionsScreen}
            />
          </Stack.Group>
        ) : (
          <Stack.Group screenOptions={{headerShown: false}}>
            <Stack.Screen name={HomeRouters.home} component={HomeScreen} />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
