import {KeyboardTypeOptions, StyleProp, ViewStyle} from 'react-native';

export interface ITextInputProps {
  style?: StyleProp<ViewStyle>;
  keyboardTypes?: KeyboardTypeOptions;
  onChangeText?: (value: string) => void;
  defaultValue?: string;
  placeholder?: string;
  editable?: boolean;
  maxLength?: number;
}
