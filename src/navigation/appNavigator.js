import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "../screens/login.js";
import HomeTabsNavigator from "./tabsNavigator.js";
import SplashScreen from '../screens/splash-screen.js';
import SignUp from '../screens/signUp.js';
import ForgotPassword from '../screens/forgotPassword.js';
import SuccessfullAction from '../screens/successfullAction.js';
import ExtraData from '../screens/extraData.js';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="HomeTabs" component={HomeTabsNavigator} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="ExtraData" component={ExtraData} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="SuccessfullAction" component={SuccessfullAction} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;