import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../../store';

interface UserState {
  firstTime: boolean;
  gender: string;
  yearBorn: number;
  weight: number;
  height: number;
}

const initialState: UserState = {
  firstTime: true,
  gender: 'Male',
  yearBorn: 0,
  weight: 0,
  height: 0,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setFirstTime(state, action: PayloadAction<boolean>) {
      state.firstTime = action.payload;
    },
    setUser(state, action: PayloadAction<UserState>) {
      state = action.payload;
    },
  },
});

export const {setFirstTime, setUser} = userSlice.actions;

export const getUser = (state: RootState) => state.user;

export const getFirstTime = (state: RootState) => state.user.firstTime;

export default userSlice.reducer;
