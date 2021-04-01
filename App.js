import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { Platform, SafeAreaView, View } from "react-native";
import TextInput from "components/TextInput";
import SplashScreen from "views/SplashScreen";
import { _loadResourcesAsync } from "utils/loadFonts"; 
import Amplify from 'aws-amplify';
import config from './aws-exports';
import PushNotification from '@aws-amplify/pushnotification';
import { Analytics } from 'aws-amplify'

Amplify.configure(config);

PushNotification.onRegister(token => {
  console.log('onRegister', token);
});
PushNotification.onNotification(notification => {
  if (notification.foreground) {
    console.log('onNotification foreground', notification);
  } else {
    console.log('onNotification background or closed',
               notification);
  }
  // extract the data passed in the push notification
  const data = notification.data['pinpoint.jsonBody'];
  console.log('onNotification data', data);
  // iOS only
  // notification.finish(PushNotificationIOS.FetchResult.NoData);
});
PushNotification.onNotificationOpened(notification => {
  console.log('onNotificationOpened', notification);
  // extract the data passed in the push notification
  const data = notification['pinpoint.jsonBody'];
  console.log('onNotificationOpened data', data);
});

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
