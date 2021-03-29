import { StyleSheet } from "react-native";
import { scale } from "../../config/scale";
import colors from '../../config/colors.json'

export default StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  lottieContainer: {
    width: scale(300),
    height: scale(300),
  },
  text: {
    textAlign: "center",
    width: scale(250),
    lineHeight: scale(35),
  },
  title: {
    color: colors.yellow,
    fontSize: 30,
    letterSpacing: 10
  }
});
