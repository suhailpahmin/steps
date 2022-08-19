import {GestureResponderEvent, StyleProp, ViewStyle} from 'react-native';

export enum Type {
  PRIMARY,
  SECONDARY,
}

export interface IButtonProps {
  type: Type;
  label: string;
  style?: StyleProp<ViewStyle>;
  onPress?: null | ((event: GestureResponderEvent) => void) | undefined;
  disabled?: null | boolean | undefined;
}
