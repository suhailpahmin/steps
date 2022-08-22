import {Image, View} from 'react-native';
import React, {FC} from 'react';
import {Text, TextSize} from '@ui';

import {Images} from '@assets';
import {cwPermissions} from '../../../components/configs/copywriting';
import styles from './permissions.styles';

export enum Permission {
  HEALTH_KIT,
  LOCATION,
}

interface IPermissionProps {
  permission: Permission;
}

export const PermissionInfo: FC<IPermissionProps> = props => {
  return props.permission === Permission.HEALTH_KIT ? (
    <View style={styles().hkWrapper}>
      <View style={styles().logoWrapper}>
        <Image style={styles().hkImage} source={Images.appleHealthKit} />
        <Text bold size={TextSize.SM}>
          Health
        </Text>
      </View>
      <View style={styles().permissionWrapper}>
        <Text size={TextSize.SM}>{cwPermissions.fitnessPermission}</Text>
      </View>
    </View>
  ) : (
    <View style={styles().hkWrapper}>
      <View style={styles().logoWrapper}>
        <Image style={styles().locationImage} source={Images.location} />
        <Text bold size={TextSize.SM}>
          Location
        </Text>
      </View>
      <View style={styles().permissionWrapper}>
        <Text size={TextSize.SM}>{cwPermissions.locationPermission}</Text>
      </View>
    </View>
  );
};

export default PermissionInfo;
