import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "../src/views/SplashScreen";

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
