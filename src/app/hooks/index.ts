import {useWindowDimensions} from 'react-native';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

import {AppDispatch, RootState} from '../redux/store';

export const useViewportUnits = () => {
  const {width, height} = useWindowDimensions();

  const vh = height / 100;
  const vw = width / 100;

  return {vh, vw};
};

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useDateHelper = () => {
  const currentDate = new Date();

  const first = currentDate.getDate() - (currentDate.getDay() + 6);
  const last = first + 6;

  const firstDate = new Date(currentDate.setDate(first)).toISOString(); // Monday
  const lastDate = new Date(currentDate.setDate(last)).toISOString(); // Sunday

  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Nov',
    'Dec',
  ];

  const _getCurrentMonth = (month: number): string => months[month];

  const currentMonth = _getCurrentMonth(currentDate.getMonth());
  const today =
    currentDate.getDate() +
    ' ' +
    currentMonth +
    ' ' +
    currentDate.getFullYear();

  return {today, firstDate, lastDate};
};
