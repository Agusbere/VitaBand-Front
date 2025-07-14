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
import OnboardingFlow from '../screens/onboardingScreens/OnboardingFlow';
import BanderHome from '../screens/banderScreens/banderHome';
import HosterHome from '../screens/hosterScreens/hosterHome';
import OnBoardingExtraData0 from '../screens/onboardingScreens/onBoardingExtraData0';
import OnBoardingExtraData1 from '../screens/onboardingScreens/onBoardingExtraData1';
import OnBoardingExtraData2 from '../screens/onboardingScreens/onBoardingExtraData2';
import OnBoardingExtraData3 from '../screens/onboardingScreens/onBoardingExtraData3';

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
        <Stack.Screen name="Onboarding" component={OnboardingFlow} />
        <Stack.Screen name="BanderHome" component={BanderHome} />
        <Stack.Screen name="HosterHome" component={HosterHome} />
        <Stack.Screen name="OnBoardingExtraData0" component={OnBoardingExtraData0} />
        <Stack.Screen name="OnBoardingExtraData1" component={OnBoardingExtraData1} />
        <Stack.Screen name="OnBoardingExtraData2" component={OnBoardingExtraData2} />
        <Stack.Screen name="OnBoardingExtraData3" component={OnBoardingExtraData3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;