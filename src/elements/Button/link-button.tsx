import React from 'react';
import {
  Pressable,
  PressableProps,
  StyleSheet,
  ViewStyle,
  StyleProp,
  TextStyle,
} from 'react-native';
import {useTheme} from '@appHooks';
import {Text} from '@appElements';

export interface ILinkButton extends PressableProps {
  style?: StyleProp<ViewStyle>;
  title: string;
  textStyle?: StyleProp<TextStyle>;
  innerRef?: any;
}

const LinkButton = ({
  style,
  title = 'Link Button',
  textStyle,
  innerRef,
  ...props
}: ILinkButton) => {
  const {colors} = useTheme();

  return (
    <Pressable ref={innerRef} style={[styles.button, style]} {...props}>
      <Text style={[styles.text, {color: colors.primaryColor}, textStyle]}>
        {title}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {},
  text: {},
});

export default LinkButton;
