import { Image, StyleSheet, Text, View } from "react-native";
// import { WebView } from "react-native-webview";
import { StatusBar } from "expo-status-bar";
import Button from "../components/Button.jsx";
import ScreenWrapper from "../components/ScreenWraper";
import { theme } from "../constants/theme";
import { hp, wp } from "../helpers/common";

const Welcome = () => {
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
            This is a simple welcome screen. You can customize it as per your
            needs.
          </Text>
        </View>
        <View style={styles.footer}>
          {/* You can add a button here to navigate to the next screen */}
          <Button title="Get Started" />
        </View>
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
