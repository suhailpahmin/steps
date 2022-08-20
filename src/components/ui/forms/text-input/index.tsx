import React, {FC} from 'react';
import {StyleSheet, TextInput as ReactTextInput, View} from 'react-native';

import {ITextInputProps} from './types';

import {colors} from '../../../configs/colors';

export const TextInput: FC<ITextInputProps> = props => {
  return (
    <View style={[styles.base, props.style]}>
      <ReactTextInput
        style={styles.input}
        keyboardType={props.keyboardTypes}
        onChangeText={props.onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  base: {
    borderRadius: 16,
    borderColor: colors.accent,
    borderWidth: 2,
  },
  input: {
    color: colors.text,
    padding: 24,
    textAlign: 'center',
  },
});
