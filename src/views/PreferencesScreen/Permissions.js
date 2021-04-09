import React, {useEffect, useState} from 'react';
import {View, Text, Platform, ScrollView} from 'react-native';
import styles from './PermissionsStyle'
import * as Location from 'expo-location';
import {  } from 'react-native-gesture-handler';

const Permissions = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);


  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <Text style={styles.title}>
        App Permissions
      </Text>
      <View  >
        <Text>{text}</Text>
      </View>
    </ScrollView>
  )
}

export default Permissions;