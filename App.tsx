/**
 * @format
 */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Persistance Storage
import {getFirstTime} from './src/app/redux/slices/user';
import {useAppSelector} from '@hooks';

import {HomeRouters, OnboardingRouters} from './src/components/configs';
import HomeScreen from './src/features/home/home';
import LandingScreen from './src/features/onboarding/landing';
import OnboardingSteps from './src/features/onboarding/onboarding-steps';
import PersonalizationScreen from './src/features/onboarding/personalize';
import SetPermissionsScreen from './src/features/onboarding/permissions';

const Stack = createNativeStackNavigator();

const App = () => {
  const firstTime = useAppSelector(getFirstTime);

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
