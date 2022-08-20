import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit';
import onboardingReducer from '../features/onboarding/onboardingSlice';

export const store = configureStore({
  reducer: {
    onboarding: onboardingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
