/**
 * @format
 */
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Persistance Storage
import {useAppSelector} from '@hooks';
import {getFirstTime} from './src/app/redux/slices/user';

import LandingScreen from './src/features/onboarding/landing';
import OnboardingSteps from './src/features/onboarding/onboarding-steps';
import HomeScreen from './src/features/home/home';

const Stack = createNativeStackNavigator();

const App = () => {
  const firstTime = useAppSelector(getFirstTime);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {firstTime ? (
          <Stack.Group screenOptions={{headerShown: false}}>
            <Stack.Screen name="Onboarding" component={LandingScreen} />
            <Stack.Screen name="OnboardingSteps" component={OnboardingSteps} />
          </Stack.Group>
        ) : (
          <Stack.Group>
            <Stack.Screen name="Home" component={HomeScreen} />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
