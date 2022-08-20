import {ReactNode} from 'react';
import {StyleProp, ViewStyle} from 'react-native';

export interface IContainerProps {
  style?: StyleProp<ViewStyle>;
  children: ReactNode;
}
