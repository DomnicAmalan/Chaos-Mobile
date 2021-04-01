import { StyleSheet } from "react-native";
import { scale } from "../../config/scale";
import colors from '../../config/colors.json'
import fonts from 'config/fonts'

export default StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white,
    flexDirection: "column",
    paddingBottom: scale(30)
  },
  title: {
    display: "flex",
    color: colors.black2,
    marginBottom: scale(20),
    ...fonts.title3,
    textTransform: 'uppercase',
  },
  input: {
    display: "flex",
    width: scale(250),
    backgroundColor: colors.white,
    height: scale(35),
    marginBottom: scale(20),
    borderRadius: 10
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
    flex:8,
    top: scale(100),
    alignItems: 'center'
  },
  footer: {
    display: "flex",
    flex: 1, 
    alignItems: "center",
    justifyContent: "center",
    height: scale(60)
  },
  button: {
    width: scale(150),
    height: scale(35),
    marginTop: scale(30),
    borderRadius: 10
  },
  alternate: {
    display: "flex",
    color: colors.black1,
    marginTop: scale(30)
  },
  alternateLogins: {
    display: "flex",
    flexDirection: "row",
    marginTop: 15,
    width: scale(100),
    alignItems: "center", justifyContent: "space-between"
  },
  footerText: {
    display: "flex",
    color: colors.black1,
  }
})