import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./src/login.js";
import HomeTabsNavigator from "./tabsNavigator.js";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="HomeTabs" component={HomeTabsNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
