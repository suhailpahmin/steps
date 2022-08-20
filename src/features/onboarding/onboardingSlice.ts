import {createSlice} from '@reduxjs/toolkit';
import {RootState} from 'src/app/store';

interface OnboardingState {
  step: number;
}

const initialState: OnboardingState = {
  step: 1,
};

export const onboardingSlice = createSlice({
  name: 'onboarding',
  initialState,
  reducers: {
    increment: state => {
      state.step++;
    },
    decrement: state => {
      state.step--;
    },
  },
});

export const {increment, decrement} = onboardingSlice.actions;

export const getStep = (state: RootState) => state.onboarding.step;

export default onboardingSlice.reducer;
