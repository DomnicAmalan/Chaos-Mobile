import React from "react";
import { View, Text } from "react-native";
import LottieView from "lottie-react-native";
import splashScreenStyles from "./splashScreenStyles";
import fonts from "../../config/fonts";

export default () => (
  <View style={splashScreenStyles.screen}>
    <View style={splashScreenStyles.lottieContainer}>
      <LottieView
        source={require("../../../assets/lottie/onBoardLottie.json")}
        autoPlay
        loop
      />
    </View>
    <Text style={[fonts.title2, splashScreenStyles.text]}>
      Welcome To  
      
    </Text>
    <Text style={[fonts.styledTitleItalicLined, splashScreenStyles.title]}>
      CHAOS
    </Text>
  </View>
);
