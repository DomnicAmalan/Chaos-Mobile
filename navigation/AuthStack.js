import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "views/SplashScreen";
import LoginScreen from "views/LoginScreen";


const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="LoginScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
