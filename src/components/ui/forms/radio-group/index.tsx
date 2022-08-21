import React, {FC} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';

import {IRadioGroupProps} from './types';

import {colors} from '../../../configs/colors';
import {Text} from '../../text';
import {TextSize} from '../../text/types';

export const RadioGroup: FC<IRadioGroupProps> = props => {
  const _onChange = (value: string) => {
    if (props.onSelect) {
      props.onSelect(value);
    }
  };

  return (
    <View style={[styles().base, props.style]}>
      {props.labels.map((item, index) => {
        const selected = item === props.selectedValue;
        return (
          <Pressable
            style={styles(selected).radio}
            key={index}
            onPress={() => _onChange(item)}>
            <Text size={TextSize.SM}>{item}</Text>
          </Pressable>
        );
      })}
    </View>
  );
};

const styles = (selected?: boolean) =>
  StyleSheet.create({
    base: {
      flexDirection: 'row',
    },
    radio: {
      backgroundColor: selected ? colors.overlay : colors.background,

      paddingHorizontal: 24,
      paddingVertical: 16,
      marginEnd: 24,

      borderRadius: 36,
      borderColor: colors.accent,
      borderWidth: 2,
    },
  });
