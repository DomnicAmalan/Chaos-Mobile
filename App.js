import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import * as Font from "expo-font";
import { Text } from "react-native-paper";
import { useTheme } from 'react-native-paper';
import {_loadResourcesAsync} from './utils/loadFonts';

const App = () => {
  const [isFontLoaded, setFontLoaded] = useState(false);
  const { fonts } = useTheme();

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
