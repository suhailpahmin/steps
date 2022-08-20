import {ReactNode} from 'react';
import {StyleProp, ViewStyle} from 'react-native';

export interface ISafeArea {
  style?: StyleProp<ViewStyle>;
  children: ReactNode;
}
