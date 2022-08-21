import {HomeRouters, OnboardingRouters} from './src/components/configs';
/**
 * @format
 */
import React, {useEffect} from 'react';
import {
  getWalkingSamples,
  initHKListener,
  updateHKSteps,
} from './src/app/providers/healthkit';

import HomeScreen from './src/features/home';
import LandingScreen from './src/features/onboarding/landing';
import {NavigationContainer} from '@react-navigation/native';
import OnboardingSteps from './src/features/onboarding/onboarding-steps';
import PersonalizationScreen from './src/features/onboarding/personalize';
import SetPermissionsScreen from './src/features/onboarding/permissions';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {getFirstTime} from './src/app/redux/slices/user';
// Persistance Storage
import {useAppSelector, useDateHelper} from '@hooks';

const Stack = createNativeStackNavigator();

const App = () => {
  const firstTime = useAppSelector(getFirstTime);

  const newStep = (): void => {
    const {firstDate, lastDate} = useDateHelper();
    getWalkingSamples(firstDate, lastDate);
  };

  const stepUpdate = (): void => {
    const {firstDate, lastDate} = useDateHelper();
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
