import React from "react";
import { StyleSheet, Text , View , Image} from "react-native";
// import { WebView } from "react-native-webview";
import ScreenWrapper from "../components/ScreenWraper";
import { StatusBar } from "expo-status-bar";

const Welcome = () => {
  return (
    <ScreenWrapper bgColor="#fff">
        <StatusBar style="dark" />
        <View style={styles.container}>
            <Image style={styles.welcomeImage} resizeMode="contain" source={require('../assets/images/welcome.png')} />
        </View>
    </ScreenWrapper>
  );
};
export default Welcome;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})