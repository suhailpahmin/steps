import React, {useEffect} from 'react';

import {Container, SafeArea, Text, TextSize} from '@ui';

import styles from './permissions.styles';

import {cwPermissions} from '../../../components/configs/copywriting';
import {useHKStepCount} from '../../../app/hooks/healthkit';

const SetPermissionsScreen = () => {
  const stepCountHK = useHKStepCount();

  useEffect(() => {
    console.log('Count ', stepCountHK);
  });

  return (
    <SafeArea>
      <Container style={styles.container}>
        <Text bold size={TextSize.LG}>
          {cwPermissions.title}
        </Text>
        <Text style={styles.subtitle}>{cwPermissions.subtitle}</Text>
      </Container>
    </SafeArea>
  );
};

export default SetPermissionsScreen;
