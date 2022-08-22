import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import VectorImage from 'react-native-vector-image';

import {Images} from '@assets';

import {colors, HomeRouters} from '../../components/configs';
import DashboardScreen from '../dashboard';
import InsightScreen from '../insights';
import AchievementScreen from '../achievement';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let iconName;

          switch (route.name) {
            case HomeRouters.dashboard:
              iconName = focused ? Images.dashboard : Images.inactiveDashboard;
              break;
            case HomeRouters.insight:
              iconName = focused ? Images.insights : Images.inactiveInsights;
              break;
            case HomeRouters.achievement:
              iconName = focused
                ? Images.achievement
                : Images.inactiveAchievement;
              break;
          }

          return <VectorImage source={iconName} />;
        },
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.overlay,
        },
        tabBarShowLabel: false,
      })}>
      <Tab.Screen
        name={HomeRouters.dashboard}
        component={DashboardScreen}
        options={{unmountOnBlur: true}} // Reset dashboard to retrieve new steps
        listeners={({navigation}) => ({
          blur: () => navigation.setParams({screen: undefined}),
        })}
      />
      <Tab.Screen name={HomeRouters.insight} component={InsightScreen} />
      <Tab.Screen
        name={HomeRouters.achievement}
        component={AchievementScreen}
      />
    </Tab.Navigator>
  );
};

export default HomeScreen;
