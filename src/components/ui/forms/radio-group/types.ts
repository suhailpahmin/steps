import {StyleProp, ViewStyle} from 'react-native';

export interface IRadioGroupProps {
  labels: string[];
  selectedValue: string;
  style?: StyleProp<ViewStyle>;
  onSelect?: (value: string) => void;
}
