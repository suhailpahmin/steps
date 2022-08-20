import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {IContainerProps} from './types';

export const Container: FC<IContainerProps> = props => {
  return <View style={[styles.base, props.style]}>{props.children}</View>;
};

const styles = StyleSheet.create({
  base: {
    margin: 16,
  },
});
