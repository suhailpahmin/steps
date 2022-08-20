import {PayloadAction, createSlice} from '@reduxjs/toolkit';

import {RootState} from '../../store';

interface FitnessState {
  goals: number;
  steps: number;
}

const initialState: FitnessState = {
  goals: 0,
  steps: 0,
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
  },
});

export const {setGoals, setSteps} = fitnessSlice.actions;

export const getGoals = (state: RootState) => state.fitness.goals;

export const getSteps = (state: RootState) => state.fitness.steps;

export default fitnessSlice.reducer;
