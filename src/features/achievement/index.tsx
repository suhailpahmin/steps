import React from 'react';
import {View} from 'react-native';

import {Container, SafeArea, Text, TextSize} from '@ui';
import {useViewportUnits} from '@hooks';

import styles from './achievement.styles';
import {colors, cwAchievements} from '../../components/configs';

const AchievementScreen = () => {
  const {vh} = useViewportUnits();
  return (
    <SafeArea>
      <Container style={styles().container}>
        <Text bold size={TextSize.LG}>
          {cwAchievements.title}
        </Text>
        <View style={styles().cardWrapper}>
          <View style={styles(vh).card}>
            <Text style={styles().cardValue} bold size={TextSize.MD}>
              11350
            </Text>
            <Text bold style={styles().cardTitle} size={TextSize.SM}>
              {cwAchievements.totalSteps}
            </Text>
          </View>
          <View style={styles(vh).card}>
            <Text style={styles().cardValue} bold size={TextSize.MD}>
              6350
            </Text>
            <Text bold style={styles().cardTitle} size={TextSize.SM}>
              {cwAchievements.averageDaily}
            </Text>
          </View>
        </View>
        <View style={styles().cardWrapper}>
          <View style={[styles(vh).card]}>
            <Text style={styles().cardValue} bold size={TextSize.MD}>
              1550
            </Text>
            <Text bold style={styles().cardTitle} size={TextSize.SM}>
              {cwAchievements.caloriesBurned}
            </Text>
          </View>
          <View style={styles(vh).card}>
            <Text style={styles().cardValue} bold size={TextSize.MD}>
              153
            </Text>
            <Text bold style={styles().cardTitle} size={TextSize.SM}>
              {cwAchievements.distanceTravelled}
            </Text>
          </View>
        </View>
      </Container>
    </SafeArea>
  );
};

export default AchievementScreen;
