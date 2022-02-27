import React from 'react';
import {Text as RNText, TextProps} from 'react-native';
import {useTheme} from '@appHooks';

interface IText extends TextProps {
  innerRef?: any;
}

const Text = ({style, innerRef, ...props}: IText) => {
  const {colors} = useTheme();

  return (
    <RNText
      ref={innerRef}
      style={[{color: colors.primaryTextColor}, style]}
      {...props}
    />
  );
};

export default Text;
