import {useWindowDimensions} from 'react-native';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

import {AppDispatch, RootState} from './../store';

export const useViewportUnits = () => {
  const {width, height} = useWindowDimensions();

  const vh = height / 100;
  const vw = width / 100;

  return {vh, vw};
};

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
