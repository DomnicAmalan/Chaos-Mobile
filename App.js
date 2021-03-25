import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { Platform, SafeAreaView, View } from "react-native";
import { _loadResourcesAsync } from "./utils/loadFonts";

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
    <SafeAreaView>
      {Platform.OS === "ios" && <StatusBar style="dark" />}
    </SafeAreaView>
  );
};

export default App;
