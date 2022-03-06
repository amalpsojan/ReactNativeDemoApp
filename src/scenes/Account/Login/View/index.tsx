import React, {memo, useRef, useState} from 'react';
import {StyleSheet, View, SafeAreaView} from 'react-native';

import {Button, Text, Input} from '@appElements';

import {useTheme, useLocale} from '@appHooks';

interface ILoginUI {
  viewModel: {
    login: (value: {username: string; password: string}) => void;
  };
}

const LoginView = ({viewModel}: ILoginUI) => {
  const {colors} = useTheme();
  const {language} = useLocale();

  const emailRef: any = useRef();
  const passwordRef: any = useRef();

  // const [email, onChangeEmail] = useState('batman@test.com');
  // const [password, onChangePassword] = useState('12345678');

  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');

  const {login} = viewModel;

  // const {a}=errors

  const onLogin = () => {
    login({
      username: email,
      password,
    });
  };

  return (
    <SafeAreaView
      style={[
        styles.screenContainer,
        {backgroundColor: colors.backgroundColor},
      ]}
      testID="login-view-scene">
      <View style={[styles.container]}>
        <View>
          <Text style={[styles.logo, {color: colors.primaryColor}]}>
            {language('appName')}
          </Text>
        </View>

        <View style={styles.form}>
          <Input
            testID="login-view-email-input"
            innerRef={emailRef}
            value={email}
            placeholder={language('Email')}
            onChangeText={onChangeEmail}
            onSubmitEditing={() => passwordRef.current.focus()}
            // error={errors.login.username}
          />

          <Input
            testID="login-view-password-input"
            innerRef={passwordRef}
            value={password}
            secureTextEntry
            placeholder={language('Password')}
            onChangeText={onChangePassword}
            onSubmitEditing={onLogin}
            // error={errors.login.password}
          />

          <Button.LinkButton
            title={language('Forgot Password?')}
            textStyle={[styles.forgot, {color: colors.primaryTextColor}]}
            onPress={() => console.log('Forgot Password?..')}
          />

          <Button
            testID="login-view-login-button"
            title={language('LOGIN')}
            onPress={onLogin}
          />

          <Button.LinkButton
            title={language('Signup')}
            textStyle={[{color: colors.primaryTextColor}]}
            onPress={() => console.log('SignUp..')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default memo(LoginView);

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontWeight: 'bold',
    marginBottom: 40,
    fontSize: 50,
  },
  forgot: {
    fontSize: 11,
  },
  loginBtn: {
    width: '80%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  form: {
    alignItems: 'center',
  },
});
