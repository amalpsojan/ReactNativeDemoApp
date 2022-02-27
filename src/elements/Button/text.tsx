import React from 'react';
import {
  Pressable,
  PressableProps,
  StyleSheet,
  ViewStyle,
  StyleProp,
} from 'react-native';
import {useTheme} from '@appHooks';
import {Text} from '@appElements';
import {Styles} from '@appTheme';

export interface IButton extends PressableProps {
  style?: StyleProp<ViewStyle>;
  title?: string;
  innerRef?: any;
}

const Button = ({style, title = 'Button', innerRef, ...props}: IButton) => {
  const {colors} = useTheme();

  return (
    <Pressable
      ref={innerRef}
      style={[styles.button, {backgroundColor: colors.primaryColor}, style]}
      {...props}>
      <Text>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    ...Styles.elementView,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
});

export default Button;
