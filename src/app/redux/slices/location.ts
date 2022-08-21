import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store';

interface LocationState {
  latitude: number;
  longitude: number;
}

const initialState: LocationState = {
  latitude: 0,
  longitude: 0,
};

export const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setCoords(state, action: PayloadAction<LocationState>) {
      state.latitude = action.payload.latitude;
      state.longitude = action.payload.longitude;
    },
  },
});

export const {setCoords} = locationSlice.actions;

export const getCoords = (state: RootState) => state.location;

export default locationSlice.reducer;
