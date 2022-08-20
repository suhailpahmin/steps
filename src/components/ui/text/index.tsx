import React, {FC} from 'react';
import {ITextProps, TextSize} from './types';
import {StyleSheet, Text as ReactText} from 'react-native';
import {colors} from '../../configs/colors';

export const Text: FC<ITextProps> = props => {
  return (
    <ReactText style={[styles(props.size, props.bold).base, props.style]}>
      {props.children}
    </ReactText>
  );
};

const styles = (size?: TextSize, bold?: boolean) =>
  StyleSheet.create({
    base: {
      color: colors.text,
      fontSize:
        size === TextSize.SM
          ? 16
          : size === TextSize.MD
          ? 24
          : size === TextSize.LG
          ? 36
          : 8,
      fontWeight: bold ? 'bold' : '300',
      letterSpacing: 3.0,
    },
  });
