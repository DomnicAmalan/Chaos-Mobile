import { StyleSheet } from "react-native";
import { scale } from "config/scale";
import colors from 'config/colors.json'

export default StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  formcontainer: {
    display: "flex",
    flexDirection: "column",
    flex:1,
    width: scale(300),
    height: scale(300),
    elevation: 0.5,
    justifyContent: "flex-end"
  },
  input: {
    display:"flex",
    backgroundColor: colors.white,
    display: "flex",
    fontSize: scale(10),
    height: scale(40)
  },
  footer: {
    display: "flex",
    height: scale(300)
  }
});