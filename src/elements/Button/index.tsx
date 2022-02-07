import React from 'react';
import CustomButton, {IButton} from './button';
import LinkButton from './link-button';

const Button = (props: JSX.IntrinsicAttributes & IButton) => (
  <CustomButton {...props} />
);

Button.LinkButton = LinkButton;

export default Button;
