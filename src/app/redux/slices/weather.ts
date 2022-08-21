import {PayloadAction, createSlice} from '@reduxjs/toolkit';

import {RootState} from '../store';
interface WeatherState {
  description: string;
  icon: string;
  temperature: number;
}

const initialState: WeatherState = {
  description: '',
  icon: '',
  temperature: 0,
};

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setWeather(state, action: PayloadAction<WeatherState>) {
      state.description = action.payload.description;
      state.icon = action.payload.icon;
      state.temperature = action.payload.temperature;
    },
  },
});

export const {setWeather} = weatherSlice.actions;

export const getWeather = (state: RootState) => state.weather.description;

export const getWeatherIcon = (state: RootState) => state.weather.icon;

export const getTemperature = (state: RootState) => state.weather.temperature;

export default weatherSlice.reducer;
