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
          : styles.secondary,
      ]}>
      <Text style={styles.text}>{props.label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  base: {
    borderRadius: 24,
  },
  primary: {
    backgroundColor: colors.primary,
  },
  secondary: {
    backgroundColor: colors.secondary,
  },
  disabled: {
    backgroundColor: colors.accent,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,

    paddingHorizontal: 16,
    paddingVertical: 24,
    color: colors.text,
    textAlign: 'center',
  },
});
