import React, {FC} from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useViewportUnits} from '../../../app/hooks';
import {colors} from '../../configs/colors';

import {ISafeArea} from './types';

export const SafeArea: FC<ISafeArea> = props => {
  const {vh} = useViewportUnits();
  const fullScreen = vh * 100;

  return (
    <SafeAreaView style={[{height: fullScreen}, styles.base, props.style]}>
      {props.children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  base: {
    backgroundColor: colors.background,
  },
});
