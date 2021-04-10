import { StyleSheet } from "react-native";
import { scale } from "../../config/scale";
import colors from '../../config/colors.json'
import fonts from 'config/fonts'

export default StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center"
  },
  card: {
    display: "flex",
    width: scale(180),
    height: scale(100),
    backgroundColor: "green",
    marginVertical: scale(10),
    marginStart: scale(10),
    borderRadius: scale(10)
  },
  gridView: {
    paddingTop: scale(25),
    flex: 1,
  },
  itemContainer: {
    justifyContent: "space-between",
    borderRadius: scale(5),
    padding: scale(10),
    height: scale(100),
  },
  itemName: {
    ...fonts.headline,
    color: "#000",
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: 'grey',
  },
  title: {
    ...fonts.title1,
    color: colors.primary,
    marginHorizontal: scale(30),
    textAlign: 'center',
    marginVertical: scale(10)
  },
  searchbar: {
    marginHorizontal: scale(30),
    elevation: 0.5,
    borderRadius: scale(30),
    marginBottom: scale(30)
  },
  detailsModal: {
    flex:1,
    backgroundColor: colors.white,
    // alignItems: "center",
    height: scale(200),
    marginTop: scale(300),
    borderTopStartRadius: scale(30),
    borderTopEndRadius: scale(30)
  },
  swipeIcon: {
    fontSize: scale(30), color: colors.black1
  },
  checkicon: {
    color: colors.primary,
    fontSize: scale(20),
  },
  selectedItems: {
    color: colors.primary
  }
})