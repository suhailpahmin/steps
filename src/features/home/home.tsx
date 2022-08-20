import React from 'react';

import {SafeArea} from '../../components/ui/safe-area';
import {Text} from '../../components/ui/text';
import {TextSize} from '../../components/ui/text/types';

const HomeScreen = () => {
  return (
    <SafeArea>
      <Text size={TextSize.LG} bold>
        Home
      </Text>
    </SafeArea>
  );
};

export default HomeScreen;
