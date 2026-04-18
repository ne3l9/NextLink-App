import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import { theme } from '../constants/theme'
import { hp } from '../helpers/common'
import Icons from '../assets/icons'

const Input = (props) => {
  const { icon, containerStyles, inputRef, ...rest } = props

  return (
    <View style={[styles.container, containerStyles]}>
      {icon && <View style={{ marginRight: 12 }}>{icon}</View>}

      <TextInput
        style={{ flex: 1 }}
        placeholderTextColor={theme.colors.textLight}
        ref={inputRef}
        autoCapitalize="none"
        {...rest}
      />
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: hp(7.2),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.4,
    borderColor: theme.colors.text,
    borderRadius: theme.radius.xxl,
    borderCurve: 'continuous',
    paddingHorizontal: 18,
  }
})