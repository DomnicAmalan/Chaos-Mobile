import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { Platform, SafeAreaView, View } from "react-native";
import TextInput from "components/TextInput";
import SplashScreen from "views/SplashScreen";
import { _loadResourcesAsync } from "utils/loadFonts"; 
import Amplify from 'aws-amplify';
import config from './aws-exports';
import PushNotification from '@aws-amplify/pushnotification';
import { Analytics, Auth } from 'aws-amplify'

Amplify.configure(config);

const endpointId = 
  Analytics.getPluggable('AWSPinpoint')._config.endpointId;

console.log(endpointId)
PushNotification.onRegister(token => {
  console.log(token, "sdhsjdhjs")
});
PushNotification.onNotification((notification) => {
  if (notification.foreground) {
    const data = notification.body;
    console.log(data)
  } else {
    console.log('onNotification background or closed',
               notification);
  }
  console.log(notification)
  const data = notification.data;
  console.log('onNotification data', data);
  // iOS only
  // notification.finish(PushNotificationIOS.FetchResult.NoData);
});
PushNotification.onNotificationOpened(notification => {
  console.log('onNotificationOpened', notification);
  // extract the data passed in the push notification
  const data = notification.data;
  console.log('onNotificationOpened data', data);
});


const App = () => {
  const [isFontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    _loadResourcesAsync().then(() => {
      setFontLoaded(true);
    });
    // tets()
  }, []);
  

  const tets = async() => {
    const sub = await Auth.currentUserInfo();
    console.log(sub)
  }

  if (!isFontLoaded) {
    return <View></View>;
  }
  return (
    <Paperprovider theme={theme}>
      <SafeAreaView style={{ flex: 1 }}>
        {Platform.OS === "ios" && <StatusBar style="dark" />}
        <NavigationContainer linking={linking}>
          <AuthStack />
        </NavigationContainer>
      </SafeAreaView>
    </Paperprovider>
  );
};

export default App;
