import React from "react";
import { TextInput } from "react-native-paper";
import colors from "config/colors.json";

export default ({label, placeholder, style, password}) => (
  <TextInput
    mode="outlined"
    placeholder={placeholder && placeholder}
    label={label && label}
    theme={{ colors: { primary: colors.primary } }}
    style={style && style}
    secureTextEntry={password ? true : false}
  />
);
