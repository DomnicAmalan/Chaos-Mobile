import React, {useEffect, useState} from 'react';
import {View, Text, Platform, StyleSheet, Button} from 'react-native';
import styles from './PermissionsStyle'
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';
import LocationIllustraor from 'assets/svgs/location_get.svg'

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

      let resp = await Location.getCurrentPositionAsync({});
      // setLocation(resp.coords);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <>
      <Text style={styles.title}>
        App Permissions
      </Text>
      {location && (
        <MapView
          style={{ ...StyleSheet.absoluteFillObject }}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{ 
              latitude: location.latitude,
              longitude: location.longitude,
            }}
            title='Flatiron School Atlanta'
            description='This is where the magic happens!'
          >
          </Marker >
        </MapView>
        )
      }
      {
        !location && (
          <>
            <LocationIllustraor width={"100%"} height={"80%"} />
            <Button style={{position: 'absolute'}} title={"Enable Location"}>
              Enable Location
            </Button>
          </>
        )
      }
      
      
    </>
  )
}

export default Permissions;