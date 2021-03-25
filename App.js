import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import * as Font from "expo-font";
import { Text } from "react-native-paper";
import { useTheme } from 'react-native-paper';

const App = () => {
  const [isFontLoaded, setFontLoaded] = useState(false);
  const { fonts } = useTheme();

  const _loadResourcesAsync = async () => {
    return Promise.all([
      Font.loadAsync({
        ColabBol: require("./assets/fonts/ColabBol.otf"),
        SFSportsNightNSUpright: require("./assets/fonts/SFSportsNightNSUpright.ttf"),
      }),
    ]);
  };

  useEffect(() => {
    _loadResourcesAsync().then(() => {
      setFontLoaded(true);
    });
  }, []);

  if (!isFontLoaded) {
    return <View></View>;
  }
  return (
    <SafeAreaView>
      <Text style={{fontFamily:fonts.b}}>Test</Text>
    </SafeAreaView>
  );
};

export default App;
