import {Images} from '@assets';
import {Container, SafeArea} from '@ui';

import React from 'react';
import VectorImage from 'react-native-vector-image';

const DashboardScreen = () => {
  return (
    <SafeArea>
      <Container>
        <VectorImage source={Images.dashboard} />
      </Container>
    </SafeArea>
  );
};

export default DashboardScreen;
