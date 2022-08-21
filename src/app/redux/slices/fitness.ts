import {PayloadAction, createSlice} from '@reduxjs/toolkit';

import {RootState} from '../store';

interface FitnessState {
  goals: number;
  steps: number;
  allowed: boolean;
}

const initialState: FitnessState = {
  goals: 0,
  steps: 0,
  allowed: false,
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
  },
});

export const {setGoals, setSteps, setHealthPermission} = fitnessSlice.actions;

export const getGoals = (state: RootState) => state.fitness.goals;

export const getSteps = (state: RootState) => state.fitness.steps;

export const getHealthPermission = (state: RootState) => state.fitness.allowed;

export default fitnessSlice.reducer;
