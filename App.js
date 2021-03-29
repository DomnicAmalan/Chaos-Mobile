import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { Platform, SafeAreaView, View } from "react-native";
import TextInput from "components/TextInput";
import SplashScreen from "views/SplashScreen";
import { _loadResourcesAsync } from "utils/loadFonts"; 

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
    <SafeAreaView style={{ flex: 1 }}>
      {Platform.OS === "ios" && <StatusBar style="dark" />}
      {/* <TextInput placeholder="test" /> */}
      <SplashScreen />
    </SafeAreaView>
  );
};

export default App;
