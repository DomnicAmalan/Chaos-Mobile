import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { Platform, SafeAreaView, View } from "react-native";
import { _loadResourcesAsync } from "utils/loadFonts"; 
import {Provider as Paperprovider} from 'react-native-paper';
import { useTheme } from "react-native-paper";
import { NavigationContainer } from '@react-navigation/native'; 
import { linking } from 'utils/linking';
import AppStack from 'navigation/AppStack';
import Realm from 'realm'

export default function App() {
  const [isFontLoaded, setFontLoaded] = useState(false);
  const {theme} = useTheme()
  useEffect(() => {
    _loadResourcesAsync().then(() => {
      setFontLoaded(true);
    });
    const tasks = Realm.objects("Users");
  }, []);
  
  if (!isFontLoaded) {
    return <View></View>;
  }
  return (
    <Paperprovider theme={theme}>
      <SafeAreaView style={{ flex: 1 }}>
        {Platform.OS === "ios" && <StatusBar style="dark" />}
        <NavigationContainer linking={linking}>
          <AppStack />
        </NavigationContainer>
      </SafeAreaView>
    </Paperprovider>
  );
};