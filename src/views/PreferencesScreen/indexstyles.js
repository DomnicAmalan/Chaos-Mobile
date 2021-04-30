import { StyleSheet } from "react-native";
import { scale } from "../../config/scale";
import colors from '../../config/colors.json'
import fonts from 'config/fonts'

export default StyleSheet.create({
  footer: {
    width: scale(35), 
    height:scale(35), 
    borderRadius: scale(40), 
    borderWidth: scale(3), 
    borderColor: colors.primary, 
    display: "flex", 
    alignItems: "center", 
    justifyContent:"center", 
    flexDirection: "row",
  },
  footerContainer: {
    display: "flex", 
    alignItems: "center", 
    justifyContent:"space-around",  
    flexDirection: "row",
    paddingVertical: 10,
    backgroundColor: colors.white
  },
  nexticon: {
    fontSize: scale(15),
    color: colors.white,
  },
  nexticonContainer: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    width: scale(40),
    height: scale(40),
    backgroundColor: colors.primary,
    borderRadius: scale(40),
  },
  skip: {
    ...fonts.headline,
    color: colors.black1
  },
  progress: {
    ...fonts.subhead,
    letterSpacing: 0.5
    // fontSize: scale(12)
  }
})