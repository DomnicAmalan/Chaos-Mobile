import { StyleSheet } from "react-native";
import { scale } from "../../config/scale";
import colors from '../../config/colors.json'

export default StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white,
  },
})