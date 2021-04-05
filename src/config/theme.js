import { configureFonts, DefaultTheme } from "react-native-paper";
import colors from "./colors.json";

export const theme = {
  ...DefaultTheme,
  roundness: 5,
  colors: {
    primary: colors.primary,
    white: colors.white,
    black1: colors.black1,
    mattblack: colors.mattblack,
    black2: colors.black2,
    black3: colors.black3,
    yellow: colors.yellow,
  },
};
