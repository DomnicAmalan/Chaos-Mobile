import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "../src/views/SplashScreen";
import LoginScreen from 'views/LoginScreen';
import SignupScreen from 'views/SignupScreen'

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="LoginScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignupScreen" component={SignupScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
