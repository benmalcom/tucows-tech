import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
} from '@chakra-ui/react';
import React from 'react';

type ButtonVariant = 'primary';
type ButtonProps = ChakraButtonProps & {
  variant?: ButtonVariant;
};

const Button: React.FC<ButtonProps> = ({ variant, ...rest }) => {
  let buttonComponent;

  switch (variant) {
    case 'primary':
      buttonComponent = <PrimaryButton {...rest} />;
      break;
    // Add cases for other variants if needed

    default:
      // Fallback to a default button if variant is not recognized
      buttonComponent = <ChakraButton {...rest} />;
      break;
  }

  return buttonComponent;
};

const PrimaryButton: React.FC<ButtonProps> = ({ ...rest }) => (
  <ChakraButton
    color="white"
    bgGradient="linear(to-r, orange.500, orange.400)"
    opacity="0.9"
    _hover={{ opacity: 1 }}
    _active={{ opacity: 1 }}
    _disabled={{ opacity: 0.8 }}
    {...rest}
  />
);

export default Button;
