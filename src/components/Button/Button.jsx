import React from 'react'
import {BaseButton, GoogleSignInButton, Inverted, ButtonSpinner, Concluded} from './button.styles'

export const BUTTON_TYPE_CLASSES = {
  base: 'base',
  google: 'google-sign-in',
  inverted: 'inverted',
  concluded: 'concluded'
}

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>(
  {
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: Inverted,
    [BUTTON_TYPE_CLASSES.concluded]: Concluded,

  }[buttonType]
)

const Button = ({ children, buttonType, isLoading, ...props }) => {
  const CustomButton = getButton(buttonType)
  return (
    <CustomButton  {...props} >
      {isLoading && isLoading !== 'concluded' ? <ButtonSpinner/> : children}
    </CustomButton>
  )
}

export default Button