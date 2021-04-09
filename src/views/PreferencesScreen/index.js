import React, { useEffect, useState, createContext } from 'react';
import Favourites from './FavouriteSports';
import { percentager } from 'utils/math'
export const PreferencePageContext = createContext();
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './indexstyles'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import colors from 'config/colors.json'
import { scale } from 'config/scale';

const PreferencesScreen = () => {
  const [selectedSports, setSelectedSports] = useState([])
  return (
    <PreferencePageContext.Provider value={{ step1: {selectedSports, setSelectedSports} }}>
      <Favourites />
      <View style={styles.footerContainer}>
        <TouchableOpacity>
          <Text style={styles.skip}>Skip</Text>
        </TouchableOpacity>
        <AnimatedCircularProgress
            size={scale(40)}
            width={4}
            fill={percentager(selectedSports.length, 3)}
            tintColor={colors.primary}
            backgroundColor={colors.black1}
            lineCap="butt"
        >
          {
            (fill) => (
              <Text style={styles.progress}>
                {`${selectedSports.length}/3`}
              </Text>
            )
          }
        </AnimatedCircularProgress>
        <TouchableOpacity style={[styles.nexticonContainer, {backgroundColor: selectedSports.length >=3  ? colors.primary: null}]} >
          <Icon name={"arrow-right"} style={styles.nexticon}  />
        </TouchableOpacity>
      </View>
    </PreferencePageContext.Provider>
  )
}

export default PreferencesScreen