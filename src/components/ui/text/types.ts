import {ReactNode} from 'react';
import {StyleProp, TextStyle} from 'react-native';

export enum TextSize {
  SM,
  MD,
  LG,
}

export interface ITextProps {
  size?: TextSize;
  bold?: boolean;
  style?: StyleProp<TextStyle>;
  children: ReactNode;
}
