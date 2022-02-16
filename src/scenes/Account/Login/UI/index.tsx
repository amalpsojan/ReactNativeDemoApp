import React, {memo, Dispatch, SetStateAction, useRef} from 'react';
import {StyleSheet, View, SafeAreaView} from 'react-native';

import {Button, Text, Input} from '@app/elements';

import {useTheme} from '@app/hooks';

interface ILoginUI {
  email: string;
  password: string;
  onChangeEmail: Dispatch<SetStateAction<string>>;
  onChangePassword: Dispatch<SetStateAction<string>>;
  onLogin: () => void;
}

const LoginUI = ({
  email,
  password,
  onChangeEmail,
  onChangePassword,
  ...props
}: ILoginUI) => {
  const {colors} = useTheme();

  const emailRef: any = useRef();
  const passwordRef: any = useRef();

  const onLogin = () => {
    props.onLogin();
  };

  return (
    <SafeAreaView
      style={[
        styles.screenContainer,
        {backgroundColor: colors.backgroundColor},
      ]}
      testID="login-ui-scene">
      <View style={[styles.container]}>
        <View>
          <Text style={[styles.logo, {color: colors.primaryColor}]}>
            HeyAPP
          </Text>
        </View>

        <View style={styles.form}>
          <Input
            innerRef={emailRef}
            value={email}
            placeholder="Email"
            onChangeText={onChangeEmail}
            onSubmitEditing={() => passwordRef.current.focus()}
          />

          <Input
            innerRef={passwordRef}
            value={password}
            secureTextEntry
            placeholder="Password"
            onChangeText={onChangePassword}
            onSubmitEditing={onLogin}
          />

          <Button.LinkButton
            title={'Forgot Password?'}
            textStyle={[styles.forgot, {color: colors.primaryTextColor}]}
            onPress={() => console.log('Forgot Password?..')}
          />

          <Button title={'LOGIN'} onPress={onLogin} />

          <Button.LinkButton
            title={'Signup'}
            textStyle={[{color: colors.primaryTextColor}]}
            onPress={() => console.log('SignUp..')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default memo(LoginUI);

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
