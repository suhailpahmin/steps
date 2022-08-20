import {KeyboardTypeOptions, StyleProp, ViewStyle} from 'react-native';

export interface ITextInputProps {
  style?: StyleProp<ViewStyle>;
  keyboardTypes?: KeyboardTypeOptions;
  onChangeText?: (value: string) => void;
}
