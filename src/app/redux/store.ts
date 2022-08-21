import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit';

// Persistant Storage
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

// Reducers
import onboardingReducer from '../../features/onboarding/onboardingSlice';
import userReducer from './slices/user';
import fitnessReducer from './slices/fitness';
import locationReducer from './slices/location';
import weatherReducer from './slices/weather';

// Persistance Config
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

// Persist Reducer
const _persistedUserReducer = persistReducer(persistConfig, userReducer);
const _persistedFitnessReducer = persistReducer(persistConfig, fitnessReducer);

export const store = configureStore({
  reducer: {
    onboarding: onboardingReducer,
    user: _persistedUserReducer,
    fitness: _persistedFitnessReducer,
    location: locationReducer,
    weather: weatherReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
