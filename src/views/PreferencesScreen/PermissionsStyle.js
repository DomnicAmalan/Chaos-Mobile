import { StyleSheet } from "react-native";
import { scale } from "../../config/scale";
import colors from '../../config/colors.json'
import fonts from 'config/fonts'

export default StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center"
  },
  title: {
    ...fonts.title1,
    color: colors.primary,
    marginHorizontal: scale(30),
    textAlign: 'center',
    marginVertical: scale(10)
  },
})