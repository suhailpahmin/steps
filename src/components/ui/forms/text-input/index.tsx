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
        defaultValue={props.defaultValue}
        placeholder={props.placeholder}
        placeholderTextColor={colors.accent}
        editable={props.editable}
        maxLength={props.maxLength}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  base: {
    borderRadius: 36,
    borderColor: colors.accent,
    borderWidth: 2,
  },
  input: {
    padding: 16,
    color: colors.text,

    textAlign: 'center',
    letterSpacing: 2.5,
  },
});
