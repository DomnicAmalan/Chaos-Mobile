import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { Platform, SafeAreaView, View } from "react-native";
import { _loadResourcesAsync } from "./utils/loadFonts";
import linking from './utils/linking'
import AuthStack from "./navigation/AuthStack";
import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider } from 'react-native-paper';
import { theme } from "config/theme";

const App = () => {
  const [isFontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    _loadResourcesAsync().then(() => {
      setFontLoaded(true);
    });
  }, []);
  
  if (!isFontLoaded) {
    return <View></View>;
  }
  return (
    <PaperProvider theme={theme}>
      <SafeAreaView style={{ flex: 1 }}>
        {Platform.OS === "ios" && <StatusBar style="dark" />}
        <NavigationContainer linking={linking}>
          <AuthStack />
        </NavigationContainer>
      </SafeAreaView>
    </PaperProvider>
  );
};

export default App;
