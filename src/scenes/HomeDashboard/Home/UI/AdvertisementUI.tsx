import React, {memo} from 'react';
import {View, StyleSheet} from 'react-native';

export interface IAdvertisementUI {
  testID: string;
  visible: boolean;
  title: {
    visible: boolean;
    text?: string;
  };
}

const AdvertisementUI = ({testID, visible}: IAdvertisementUI) => {
  return !visible ? null : <View testID={testID} style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {},
});

export default memo(AdvertisementUI);
