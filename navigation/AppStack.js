import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from 'views/MainScreen';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from 'config/colors.json';
import {Text} from 'react-native';
import PreferencesScreen from 'views/PreferencesScreen'

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator 
      style={{backgroundColor: "green"}} 
      tabBarPosition="bottom" 
      tabBarOptions={{showLabel: false, showIcon: true, activeTintColor:colors.primary, renderIndicator:() => null}} 
      
    >
      <Tab.Screen 
        name="MainScreen" 
        component={MainScreen} 
        options={{
          tabBarIcon: ({color, focused}) => (
            <Icon  name='home-flood' size={20} color={color} />
          ),
          tabBarBadge: 3
        }}
      />
      <Tab.Screen 
        name="MainScreen1" 
        component={MainScreen} 
        options={{
          tabBarIcon: ({color, focused}) => (
            <Icon name='youtube-tv' size={20} color={color} />
          )
        }}
      />
      <Tab.Screen 
        name="MainScreen2" 
        component={MainScreen} 
        options={{
          tabBarIcon: ({color, focused}) => (
            <Icon name='crosshairs-gps' size={20} color={color} />
          )
        }}
      />
    </Tab.Navigator>
  );
}


const Stack = createStackNavigator();

const AppStack = () => {
  // TODO
  const check = false
  return (
    <Stack.Navigator
      initialRouteName={check ? "Tabs": "Preferences"}
      screenOptions={{ headerShown: false, }}
    >
      <Stack.Screen name="Tabs" component={MyTabs} />
      <Stack.Screen name="Preferences" component={PreferencesScreen} />
    </Stack.Navigator>
  )
};

export default AppStack;
