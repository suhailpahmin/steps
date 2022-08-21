import React, {FC} from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

import {IButtonProps, Type} from './types';

import {colors} from '../../configs/colors';

export const Button: FC<IButtonProps> = props => {
  return (
    <Pressable
      disabled={props.disabled}
      onPress={props.onPress}
      style={[
        styles.base,
        props.style,
        props.disabled
          ? styles.disabled
          : props.type === Type.PRIMARY
          ? styles.primary
          : props.type === Type.SECONDARY
          ? styles.secondary
          : styles.tertiary,
      ]}>
      <Text style={styles.text}>{props.label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  base: {
    borderRadius: 36,
  },
  primary: {
    backgroundColor: colors.primary,
  },
  secondary: {
    backgroundColor: colors.secondary,
  },
  tertiary: {
    borderColor: colors.accent,
    borderWidth: 2,
  },
  disabled: {
    backgroundColor: colors.accent,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: 2.5,

    paddingVertical: 16,
    color: colors.text,
    textAlign: 'center',
  },
});
