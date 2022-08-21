import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import VectorImage from 'react-native-vector-image';

import {Images} from '@assets';

import {HomeRouters} from '../../components/configs';
import DashboardScreen from '../dashboard';
import InsightScreen from '../insight';
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
      })}>
      <Tab.Screen name={HomeRouters.dashboard} component={DashboardScreen} />
      <Tab.Screen name={HomeRouters.insight} component={InsightScreen} />
      <Tab.Screen
        name={HomeRouters.achievement}
        component={AchievementScreen}
      />
    </Tab.Navigator>
  );
};

export default HomeScreen;
