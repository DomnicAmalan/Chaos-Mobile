import React from "react";
import { View, Text } from "react-native";
import LottieView from "lottie-react-native";
import splashScreenStyles from "./splashScreenStyles";
import fonts from "config/fonts";
import { strings } from 'utils/i18n';

export default () => (
  <View style={splashScreenStyles.screen}>
    <View style={splashScreenStyles.lottieContainer}>
      <LottieView
        source={require("assets/lottie/onBoardLottie.json")}
        autoPlay
        loop
      />
    </View>
    <Text style={[fonts.styledTitleItalicLined, splashScreenStyles.text]}>
      {strings('SplashScreen.title')}
    </Text>
    <Text style={[fonts.styledTitleItalicLined, splashScreenStyles.title]}>
      {strings('appName')}
    </Text>
  </View>
);
