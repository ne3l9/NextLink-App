import { Pressable, StyleSheet, Text } from "react-native";
import { theme } from "../constants/theme";
import { hp } from "../helpers/common";

const Button = ({
  buttonStyle,
  textStyle,
  title = "",
  onPress = () => {},
  loading = false,
  hasShadow = true,
}) => {
  const shadowStyle = {
    shadowColor: theme.colors.dark,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  };
  return (
    <Pressable
      style={[styles.button, buttonStyle, hasShadow && shadowStyle]}
      onPress={onPress}
    >
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </Pressable>
  );
};
export default Button;
const styles = StyleSheet.create({
  button: {
    backgroundColor: "#3c8e5b",
    paddingVertical: hp(1.5),
    paddingHorizontal: hp(3),
    borderRadius: theme.radius.sm,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: hp(2),
    fontWeight: theme.fonts.semibold,
  },
});
