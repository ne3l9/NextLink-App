import { Alert, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/ScreenWraper'
import { theme } from '../constants/theme'
import Icon from '../assets/icons'
import { StatusBar } from 'expo-status-bar'
import Backbutton from '../components/Backbutton'
import { useRouter } from 'expo-router'
import { useFonts } from 'expo-font'
import { hp, wp } from '../helpers/common'
import Input from '../components/Input'
import Button from '../components/Button'
import Loading from '../components/Loading'
import { Pressable } from 'react-native'

const login = () => {
  const router = useRouter();
  const emailRef = React.useRef();
  const passwordtRef = React.useRef();
  const [loading, setLoading] = React.useState(false);
  const onSubmit = async () => {
    if (!emailRef.current || !passwordtRef.current) return;{
    Alert.alert('Login Info', `Email: ${emailRef.current}\nPassword: ${passwordtRef.current}`);
    return;
  }
  // Here you can add your login logic, such as making an API call to authenticate the user.
  setLoading(true);
}

  return (
    <ScreenWrapper bg="white">
      <StatusBar style='dark' />
      <View style={styles.container}>
      <Backbutton router={router} />
      {/* welcome */}
      <View>
        <Text style={styles.welcomeText}>Lets</Text>
        <Text style={styles.welcomeText}>get started.</Text>
      </View>
      {/* form */}
      <View style={styles.form}>
        <Text style={{ fontSize: hp(1.5), color: theme.colors.text }}>
          Please sign up to continue
        </Text>

        <Input
          icon={<Icon name="user" size={26} strokeWidth={1.6} />}
          placeholder="Enter your Username"
          onChangeText={value => emailRef.current = value}
        />
        <Input
          icon={<Icon name="mail" size={26} strokeWidth={1.6} />}
          placeholder="Enter your email"
          onChangeText={value => emailRef.current = value}
        />
        <Input
          icon={<Icon name="lock" size={26} strokeWidth={1.6} />}
          placeholder="Enter your password"
          secureTextEntry
          onChangeText={value => passwordtRef.current = value}
        />

        <Input
          icon={<Icon name="lock" size={26} strokeWidth={1.6} />}
          placeholder="Confirm your password"
          secureTextEntry
          onChangeText={value => passwordtRef.current = value}
        />

        {/* <Text style={styles.forgotPassword}>
          Forgot Password?
        </Text> */}
        {/* login button */}
        <Button title="Sign Up" loading={loading} onPress={onSubmit} />
      </View>

      </View>
      {/* footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Already have an account?
        </Text>
        <Pressable>
          <Text style={[styles.footerText, { color: theme.colors.primary }]}>
            Sign In
          </Text>
        </Pressable>
      </View>
    </ScreenWrapper>
  )
}

export default login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 45,
    paddingHorizontal: wp(5),
  },
  welcomeText:{
    fontSize: hp(4),
    fontWeight: theme.fonts.bold,
    color: theme.colors.text,
  },
  form:{
    gap: 25,
  },
  forgotPassword: {
    textAlign: 'right',
    fontWeight: theme.fonts.semibold,
    color: theme.colors.text
  },
  footer:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
  footerText: {
    textAlign: 'center',
    color: theme.colors.text,
    fontSize: hp(1.6)
  }
})