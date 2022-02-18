import {User} from '@app/types/account/models';
import React, {memo} from 'react';
import {SafeAreaView} from 'react-native';

interface IHomeUI {
  profile: User;
}

/* eslint-disable @typescript-eslint/no-unused-vars */
const HomeUI = ({profile}: IHomeUI) => {
  return <SafeAreaView testID="home-ui-scene" />;
};

export default memo(HomeUI);
