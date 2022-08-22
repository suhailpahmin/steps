import {PayloadAction, createSlice} from '@reduxjs/toolkit';

import {RootState} from '../store';

interface FitnessState {
  goals: number;
  steps: number;
  distance: number;
  allowed: boolean;
  progress: number;
}

const initialState: FitnessState = {
  goals: 0,
  steps: 0,
  distance: 0,
  allowed: false,
  progress: 0,
};

export const fitnessSlice = createSlice({
  name: 'fitness',
  initialState,
  reducers: {
    setGoals(state, action: PayloadAction<number>) {
      state.goals = action.payload;
    },
    setSteps(state, action: PayloadAction<number>) {
      state.steps = action.payload;
    },
    setHealthPermission(state, action: PayloadAction<boolean>) {
      state.allowed = action.payload;
    },
    setStepProgress(state, action: PayloadAction<number>) {
      state.progress = action.payload;
    },
    setDistance(state, action: PayloadAction<number>) {
      state.distance = action.payload;
    },
  },
});

export const {
  setGoals,
  setSteps,
  setHealthPermission,
  setStepProgress,
  setDistance,
} = fitnessSlice.actions;

export const getGoals = (state: RootState) => state.fitness.goals;

export const getSteps = (state: RootState) => state.fitness.steps;

export const getHealthPermission = (state: RootState) => state.fitness.allowed;

export const getStepProgress = (state: RootState) => state.fitness.progress;

export const getDistance = (state: RootState) => state.fitness.distance;

export default fitnessSlice.reducer;
