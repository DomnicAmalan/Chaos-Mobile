import React from "react";
import { TextInput } from "react-native-paper";
import colors from "config/colors.json";

export default ({label, placeholder, style, password, value}, ...props) => (
  <TextInput
    mode="outlined"
    placeholder={placeholder && placeholder}
    label={label && label}
    style={style && style}
    secureTextEntry={password ? true : false}
    value={value}
    {...props}
  />
);
