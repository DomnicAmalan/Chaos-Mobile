import React, {useState} from "react";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import Favourites from 'views/PreferencesScreen/FavouriteSports'
import {PreferencePageContext} from 'views/PreferencesScreen'
import Permissions from 'views/PreferencesScreen/Permissions'

const Stack = createStackNavigator();



const PreferenceStack = () => {
  const [selectedSports, setSelectedSports] = useState([])
  return (
    <PreferencePageContext.Provider value={{ step1: {selectedSports, setSelectedSports} }} >
      <Stack.Navigator
        initialRouteName="Favourites"
        screenOptions={{ 
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      >
        <Stack.Screen name="Favourites" component={Favourites} />
        <Stack.Screen 
          name="Permissions" component={Permissions} />
      </Stack.Navigator>
    </PreferencePageContext.Provider>
  );
};

export default PreferenceStack;