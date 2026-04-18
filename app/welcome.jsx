import { Image, StyleSheet, Text, View, Pressable } from "react-native";
// import { WebView } from "react-native-webview";
import { StatusBar } from "expo-status-bar";
import Button from "../components/Button.jsx";
import ScreenWrapper from "../components/ScreenWraper";
import { theme } from "../constants/theme";
import { hp, wp } from "../helpers/common";
import { useRouter } from "expo-router";
import login from "./login.jsx";
import signUp from "./signUp.jsx";

const Welcome = () => {
  const router = useRouter();
  return (
    <ScreenWrapper bgColor={theme.colors.bgLight}>
      <StatusBar style="dark" />
      <View style={styles.container}>
        <Image
          style={styles.welcomeImage}
          resizeMode="contain"
          source={require("../assets/images/welcome.png")}
        />
        <View style={{ gap: hp(2) }}>
          <Text style={styles.title}>NextLink</Text>
          <Text style={styles.punchline}>
            Connecting minds. Empowering futures.
          </Text>
        </View>

          <Button title="Get Started"
          onPress={() => router.push('signUp')}/>
          
      </View>
      
      {/*footer*/}
      
      <View style={styles.footer}>
        <Text>Already Have a account?</Text>
         
        <Pressable>
          <Text style={{ color: theme.colors.primary }}
          onPress={() => router.push('login')}>Login</Text>
        </Pressable>
      </View>
      <View style={styles.footer}>
        <Text>© 2024 NextLink. All rights reserved.</Text>
      </View>

    </ScreenWrapper>
  );
};
export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "white",
    paddingHorizontal: wp(4),
    gap: hp(4),
  },
  welcomeImage: {
    height: hp(30),
    width: wp(100),
    alignSelf: "center",
  },
  title: {
    color: theme.colors.text,
    fontSize: hp(4),
    // fontWeight: hp(4),
    textAlign: "center",
    fontWeight: theme.fonts.extraBold,
  },
  punchline: {
    fontSize: hp(1.7),
    color: theme.colors.textLight,
    textAlign: "center",
    paddingHorizontal: wp(10),
  },
  footer: {
    width: "100%",
    alignItems: "center",
  },
});
