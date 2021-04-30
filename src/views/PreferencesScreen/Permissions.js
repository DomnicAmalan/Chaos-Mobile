import React, {useEffect, useState} from 'react';
import {View, Text, Platform, StyleSheet, Button, TouchableOpacity} from 'react-native';
import styles from './PermissionsStyle';
import styles2 from './indexstyles'
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';
import LocationIllustraor from 'assets/svgs/location_get.svg';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { percentager } from 'utils/math'
import colors from 'config/colors.json'
import { scale } from 'config/scale';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Permissions = ({ navigation }) => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);


  useEffect(() => {
    getLoactionPermission()
  }, []);

  const getLoactionPermission = async() => {
    let { status } = await Location.requestPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }
    let resp = await Location.getCurrentPositionAsync({});
    setLocation(resp.coords);
  }

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
      <View style={{flex: 1}} >
        {location && (
          <>
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
          
          </>
          )
        }
        {
          !location && (
            <>
              <LocationIllustraor width={"100%"} height={"80%"} />
              <Button 
                style={{position: 'absolute'}} 
                title={"Enable Location"} 
                onPress={() => getLoactionPermission()}
              >
                Enable Location
              </Button>
            </>
          )
        }
      </View>
      <View style={styles2.footerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles2.skip}>Previous</Text>
        </TouchableOpacity>
        <AnimatedCircularProgress
            size={scale(40)}
            width={4}
            fill={location ? 100: 0}
            tintColor={colors.primary}
            backgroundColor={colors.black1}
            lineCap="butt"
        >
          {
            (fill) => (
              <Text style={styles2.progress}>
                {`${location ? 1: 0}/1`}
              </Text>
            )
          }
        </AnimatedCircularProgress>
        <TouchableOpacity onPress={() => navigation.replace("App")} style={[styles2.nexticonContainer, {backgroundColor: location ? colors.primary: null}]} >
          <Icon name={"arrow-right"} style={styles2.nexticon}  />
        </TouchableOpacity>
      </View>
    </>
  )
}

export default Permissions;