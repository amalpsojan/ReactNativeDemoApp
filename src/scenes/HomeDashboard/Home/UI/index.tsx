import React, {memo} from 'react';
import {SafeAreaView} from 'react-native';
import AdvertisementUI, {IAdvertisementUI} from './AdvertisementUI';

type AdvertisementUIType = Omit<IAdvertisementUI, 'testID'>;

interface IHomeUI {
  advertisement: AdvertisementUIType;
}

const HomeUI = ({advertisement}: IHomeUI) => {
  return (
    <SafeAreaView testID="home-ui-scene">
      <AdvertisementUI
        {...{...advertisement, testID: 'home-ui-advertisement'}}
      />
    </SafeAreaView>
  );
};

export default memo(HomeUI);
