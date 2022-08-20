import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';

import {IOnboardTicker} from './types';
import {colors} from '../../configs/colors';
import {useViewportUnits} from '../../../app/hooks';

export const OnboardTicker: FC<IOnboardTicker> = props => {
  const {vw} = useViewportUnits();
  const maxWidth = vw * 20;
  const minWidth = vw * 6;

  return props.step === 1 ? (
    <View style={[styles(maxWidth, minWidth).container, props.style]}>
      <View
        style={[
          styles(maxWidth, minWidth).base,
          styles(maxWidth, minWidth).current,
        ]}
      />
      <View style={styles(maxWidth, minWidth).base} />
      <View style={styles(maxWidth, minWidth).base} />
    </View>
  ) : props.step === 2 ? (
    <View style={[styles(maxWidth, minWidth).container, props.style]}>
      <View
        style={[
          styles(maxWidth, minWidth).base,
          styles(maxWidth, minWidth).previous,
        ]}
      />
      <View
        style={[
          styles(maxWidth, minWidth).base,
          styles(maxWidth, minWidth).current,
        ]}
      />
      <View style={styles(maxWidth, minWidth).base} />
    </View>
  ) : (
    <View style={[styles(maxWidth, minWidth).container, props.style]}>
      <View
        style={[
          styles(maxWidth, minWidth).base,
          styles(maxWidth, minWidth).previous,
        ]}
      />
      <View
        style={[
          styles(maxWidth, minWidth).base,
          styles(maxWidth, minWidth).previous,
        ]}
      />
      <View
        style={[
          styles(maxWidth, minWidth).base,
          styles(maxWidth, minWidth).current,
        ]}
      />
    </View>
  );
};

const styles = (maxWidth: number, minWidth: number) => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
    },
    base: {
      borderRadius: 36,
      backgroundColor: colors.secondaryDark,

      width: minWidth,
      height: 16,

      marginHorizontal: 4,
    },
    current: {
      backgroundColor: colors.accent,
      width: maxWidth,
    },
    previous: {
      backgroundColor: colors.accent,
    },
  });
};
