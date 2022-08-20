import {ReactNode} from 'react';
import {StyleProp, ViewStyle} from 'react-native';

export enum TextSize {
  SM,
  MD,
  LG,
}

export interface ITextProps {
  size?: TextSize;
  bold?: boolean;
  style?: StyleProp<ViewStyle>;
  children: ReactNode;
}
