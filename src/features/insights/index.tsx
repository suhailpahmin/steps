import React, {useEffect} from 'react';
import {View} from 'react-native';
import {BarChart} from 'react-native-gifted-charts';

import {Container, SafeArea, Text, TextSize} from '@ui';
import {useAppSelector, useDateHelper, useViewportUnits} from '@hooks';

import {colors, cwInsights} from '../../components/configs';
import styles from './insights.styles';
import {getGoals} from '../../app/redux/slices/fitness';
import {
  getHKCaloriesBurned,
  getHKTotalSteps,
} from '../../app/providers/healthkit';
import {barMockCaloriesData, barMockStepsData} from './barConfigs';

const InsightScreen = () => {
  const {weekRange} = useDateHelper();
  const goals = useAppSelector(getGoals);
  const {vw, vh} = useViewportUnits();
  const stepsData = barMockStepsData;
  const caloriesData = barMockCaloriesData;

  useEffect(() => {
    getHKTotalSteps();
    getHKCaloriesBurned();
    // Cant debug weekly steps with emulator
  });

  return (
    <SafeArea>
      <Container style={styles.container}>
        <Text bold size={TextSize.LG}>
          {cwInsights.title}
        </Text>
        <View style={styles.weekHeader}>
          <Text bold size={TextSize.MD}>
            {cwInsights.thisWeek}
          </Text>
          <Text size={TextSize.MD}>{weekRange}</Text>
        </View>
        <Text style={styles.steps} bold>
          {cwInsights.steps}
        </Text>
        <View style={styles.weekBar}>
          <BarChart
            data={stepsData}
            barWidth={16}
            initialSpacing={4}
            spacing={8}
            barBorderRadius={4}
            showGradient
            yAxisThickness={0}
            xAxisType={'dashed'}
            xAxisColor={colors.secondary}
            yAxisTextStyle={{color: colors.placeholder}}
            stepValue={1000}
            maxValue={goals}
            noOfSections={6}
            dashWidth={0}
            labelWidth={40}
            yAxisLabelWidth={50}
            xAxisLabelTextStyle={{
              color: colors.placeholder,
              textAlign: 'center',
            }}
            showLine
            lineConfig={{
              color: colors.primary,
              thickness: 3,
              curved: true,
              hideDataPoints: true,
              shiftY: 20,
              initialSpacing: -50,
            }}
          />
        </View>
        <View>
          <Text style={styles.calories} bold>
            {cwInsights.calories}
          </Text>
          <View style={styles.weekBar}>
            <BarChart
              data={caloriesData}
              barWidth={16}
              initialSpacing={4}
              spacing={8}
              barBorderRadius={4}
              showGradient
              yAxisThickness={0}
              xAxisType={'dashed'}
              xAxisColor={colors.secondary}
              yAxisTextStyle={{color: colors.placeholder}}
              stepValue={1000}
              maxValue={5000}
              noOfSections={5}
              dashWidth={0}
              labelWidth={40}
              yAxisLabelWidth={50}
              xAxisLabelTextStyle={{
                color: colors.placeholder,
                textAlign: 'center',
              }}
              showLine
              lineConfig={{
                color: colors.primary,
                thickness: 3,
                curved: true,
                hideDataPoints: true,
                shiftY: 20,
                initialSpacing: -50,
              }}
            />
          </View>
        </View>
      </Container>
    </SafeArea>
  );
};

export default InsightScreen;
