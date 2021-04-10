import React, { useEffect, useState, createContext, useContext } from 'react';
import Favourites from './FavouriteSports';
import { percentager } from 'utils/math'
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './indexstyles'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import colors from 'config/colors.json'
import { scale } from 'config/scale';
import * as yup from 'yup';
import PreferenceStack from 'navigation/PreferencesStack';

export const PreferencePageContext = createContext();

let schema = yup.object().shape({
  favouritesports: yup.array().min(3).required()
});


const PreferencesScreen = () => {
  const { selectedSports } = useContext(PreferencePageContext)
  const valid = () => schema.validate({ favouriteSports: selectedSports })
  .then(resp => console.log(resp))
  .catch(err => console.log(err));
  valid()
  return (
    <>
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
    </>
  )
}

export default PreferencesScreen