import { configureFonts, DefaultTheme } from "react-native-paper";
const fontConfig = {
  default: {
    bold: {
      fontFamily: "ColabBol",
      fontWeight: "normal",
    },
    thin: {
      fontFamily: "SFSportsNightNSUpright",
    },
  },
};

export const fonts = {
  sfpro: "SFSportsNightNSUpright",
};

export const theme = {
  ...DefaultTheme,
  myOwnProperty: true,
  colors: {
    primary: "#315DFA",
    white: "#FFFFFF",
    black1: "#999999",
    mattblack: "#2B2C2E",
    black2: "#121315",
    black3: "#1F2022",
    yellow: "#F7AB08",
  },
  fonts: configureFonts(fontConfig),
};
