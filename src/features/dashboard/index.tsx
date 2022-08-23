import React, {useEffect} from 'react';
import {Alert, View, Image} from 'react-native';

import * as Progress from 'react-native-progress';
import Geolocation from 'react-native-geolocation-service';
import {useDispatch} from 'react-redux';

import {useAppSelector, useDateHelper, useViewportUnits} from '@hooks';
import {Container, SafeArea, Text, TextSize} from '@ui';

import {
  getGoals,
  getSteps,
  getStepProgress,
  setHealthPermission,
  setStepProgress,
  setSteps,
  getDistance,
} from '../../app/redux/slices/fitness';
import {apiConfig, colors} from '../../components/configs';
import styles from './dashboard.styles';
import {getHKDistance, getHKStepCount} from '../../app/providers/healthkit';
import {getLocation} from '../../app/providers/location/location';
import {getCoords, setCoords} from '../../app/redux/slices/location';
import {fetchCurrentWeather} from '../../app/providers/api';
import {
  getTemperature,
  getWeather,
  getWeatherIcon,
  setWeather,
} from '../../app/redux/slices/weather';

const DashboardScreen = () => {
  const {today} = useDateHelper();
  const {vh} = useViewportUnits();
  const dispatch = useDispatch();

  // Steps - Apple Health Kit
  const steps = useAppSelector(getSteps);
  const goals = useAppSelector(getGoals);
  const coords = useAppSelector(getCoords);
  const stepsProgress = useAppSelector(getStepProgress);
  const distance = useAppSelector(getDistance);

  // Weather
  const weather = useAppSelector(getWeather);
  const weatherIcon = useAppSelector(getWeatherIcon);
  const temperature = useAppSelector(getTemperature);

  useEffect(() => {
    getHKStepCount(_setSteps);
    getLocation(_getCoords);
    getHKDistance(_getDistance);

    if (coords.latitude !== 0 && coords.longitude !== 0) {
      _fetchWeather();
    }
  });

  const _fetchWeather = () => {
    fetchCurrentWeather(coords.latitude, coords.longitude)
      .then(response => {
        dispatch(setWeather(response));
      })
      .catch(error => Alert.alert('[ERROR] Fetch Weather', error.message));
  };

  const _getCoords = (location?: Geolocation.GeoPosition | null) => {
    if (location) {
      const locationCoords = location.coords;
      dispatch(
        setCoords({
          longitude: locationCoords.longitude,
          latitude: locationCoords.latitude,
        }),
      );
    }
  };

  const _getDistance = (result: Object[]) => {
    console.log('Distance ', result);
    // I cant get result from simulator.
  };

  const _setSteps = (allowed: boolean, stepCount: number, error: string) => {
    if (error !== '') {
      Alert.alert('[ERROR - Get HealthKit Steps]', error);
      return;
    }

    if (goals !== 0) {
      const stepProgress = stepCount / goals;
      dispatch(setStepProgress(stepProgress));
    }
    dispatch(setSteps(stepCount));
    dispatch(setHealthPermission(allowed));
  };

  return (
    <SafeArea>
      <Container style={styles(vh).container}>
        <View style={styles(vh).weatherWrapper}>
          <Image
            style={styles(vh).weatherImage}
            source={{uri: `${apiConfig.weatherIcon}${weatherIcon}.png`}}
          />
          <Text style={styles(vh).weatherText} size={TextSize.LG} bold>
            {weather}
          </Text>
          <Text style={styles(vh).temperature} size={TextSize.LG} bold>
            {temperature}°C
          </Text>
        </View>
        <View style={styles(vh).ringWrapper}>
          <View style={styles(vh).innerRingContainer}>
            <Text bold size={TextSize.MD}>
              {today}
            </Text>
            <Text bold style={styles().steps}>
              {steps}
            </Text>
            <Text bold style={styles().distance}>
              Distance : {distance} miles
            </Text>
            <Text bold size={TextSize.MD}>
              Steps Goal : {goals}
            </Text>
          </View>
          <Progress.Circle
            style={styles().progress}
            progress={stepsProgress}
            size={vh * 40}
            indeterminate={false}
            color={colors.primary}
            unfilledColor={colors.secondary}
            animated
            strokeCap="round"
          />
        </View>
      </Container>
    </SafeArea>
  );
};

export default DashboardScreen;
