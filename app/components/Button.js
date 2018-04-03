import React from 'react'
import { StyleSheet, Text } from 'react-native'
import {
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions'

import Touchable from './Touchable'

export const Button = ({ text, children, style, textStyle, ...rest }) => (
  <Touchable style={[styles.button, style]} {...rest}>
    <Text style={[styles.text, textStyle]}>{text || children}</Text>
  </Touchable>
)

const styles = StyleSheet.create({
  button: {
    // paddingVertical: 8.8,
    // paddingHorizontal: 12,
    height: responsiveHeight(8.8),
    borderRadius: 4,
    backgroundColor: 'rgb(54,177,255)',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#037aff',
    borderWidth: StyleSheet.hairlineWidth,
  },
  text: {
    fontSize: responsiveFontSize(3.6),
    color: '#fff',
  },
})

export default Button
