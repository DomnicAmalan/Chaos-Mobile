import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from 'views/MainScreen';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import colors from 'config/colors.json'

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
  return (
    <Stack.Navigator
      initialRouteName="Tabs"
      screenOptions={{ headerShown: false, }}
    >
      <Stack.Screen name="Tabs" component={MyTabs} />
    </Stack.Navigator>
  )
};

export default AppStack;
