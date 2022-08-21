import React from 'react';
import {View, Image} from 'react-native';

import {Text, TextSize} from '@ui';
import {Images} from '@assets';

import styles from './permissions.styles';
import {cwPermissions} from '../../../components/configs/copywriting';

const HealthKitInfo = () => {
  return (
    <View style={styles().hkWrapper}>
      <View style={styles().logoWrapper}>
        <Image style={styles().hkImage} source={Images.appleHealthKit} />
        <Text bold size={TextSize.SM}>
          Health
        </Text>
      </View>
      <View style={styles().permissionWrapper}>
        <Text size={TextSize.SM}>{cwPermissions.permission}</Text>
      </View>
    </View>
  );
};

export default HealthKitInfo;
