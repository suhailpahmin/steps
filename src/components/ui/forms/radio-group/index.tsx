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
      justifyContent: 'space-evenly',
    },
    radio: {
      backgroundColor: selected ? colors.accent : colors.background,

      paddingHorizontal: 24,
      paddingVertical: 16,

      borderRadius: 16,
      borderColor: colors.accent,
      borderWidth: 2,
    },
  });
