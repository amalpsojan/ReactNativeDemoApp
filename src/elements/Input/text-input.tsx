import React from 'react';
import {
  StyleSheet,
  View as RNView,
  TextInput as RNTextInput,
  TextInputProps,
  StyleProp,
  ViewStyle,
  Animated,
  ViewProps,
} from 'react-native';

import {useTheme} from '@app/hooks';

import {Styles} from '@app/theme';

interface ITextInput extends TextInputProps {
  containerStyle?: StyleProp<ViewStyle>;
  animated?: boolean;
  viewProps?: ViewProps;
  innerRef?: any;
}

const View = ({animated, ...viewProps}: any) =>
  animated ? <Animated.View {...viewProps} /> : <RNView {...viewProps} />;

const TextInput = ({
  style,
  containerStyle,
  animated = false,
  viewProps = {},
  innerRef,
  ...props
}: ITextInput) => {
  const {colors} = useTheme();

  return (
    <View
      style={[
        styles.inputView,
        {backgroundColor: colors.inputBackgroundColor},
        containerStyle,
      ]}
      {...{...viewProps, animated}}>
      <RNTextInput
        ref={innerRef}
        style={[styles.inputText, {color: colors.primaryTextColor}, style]}
        placeholderTextColor={colors.placeholderTextColor}
        {...props}
      />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  inputView: {
    ...Styles.elementView,
    borderRadius: 25,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: '100%',
  },
});
