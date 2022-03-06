import React, {memo, Fragment} from 'react';
import {StyleSheet, View, Image, SafeAreaView} from 'react-native';
import {Button, Text} from '@appElements';

import {useLocale, useTheme} from '@appHooks';
import {User} from '@appTypes/account/models';

interface IProfileUI {
  viewModel: {
    logout: () => void;
    profile: User;
  };
}

const ProfileView = ({viewModel}: IProfileUI) => {
  const {language} = useLocale();
  const {profile, logout} = viewModel;

  const onLogout = () => {
    logout();
  };

  const {colors} = useTheme();

  return (
    <Fragment>
      <SafeAreaView
        style={[styles.statusBar, {backgroundColor: colors.primaryColor}]}
      />
      <SafeAreaView
        style={[
          styles.screenContainer,
          {backgroundColor: colors.backgroundColor},
        ]}
        testID="profile-view-scene">
        <View style={styles.container}>
          <View
            style={[
              styles.header,
              {
                backgroundColor: colors.primaryColor,
              },
            ]}
          />
          <Image
            style={styles.avatar}
            source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}
          />
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text>{profile.name}</Text>

              <Button title={language('Option 1')} onPress={() => {}} />
              <Button title={language('Logout')} onPress={onLogout} />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </Fragment>
  );
};

export default memo(ProfileView);

const styles = StyleSheet.create({
  statusBar: {
    flex: 0,
  },
  screenContainer: {
    flex: 1,
  },
  container: {flex: 1},
  header: {
    height: 200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 130,
  },
  body: {
    marginTop: 40,
  },
  bodyContent: {
    alignItems: 'center',
    padding: 30,
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: '#00BFFF',
  },
  name: {
    fontSize: 22,
    fontWeight: '600',
  },
  info: {
    fontSize: 16,
    color: '#00BFFF',
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    color: '#696969',
    marginTop: 10,
    textAlign: 'center',
  },
});
