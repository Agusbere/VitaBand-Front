import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/hosterScreens/hosterHome.js";
import Banders from "../screens/banders.js";
import Calendar from "../screens/calendar.js";
import Profile from "../screens/profile.js";
import NewMedication from "../screens/newMedication.js";
import CustomTabBar from "./navigationBar.js";

const Tab = createBottomTabNavigator();

const HomeTabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Banders" component={Banders} />
      <Tab.Screen name="NewMedication" component={NewMedication} />
      <Tab.Screen name="Calendar" component={Calendar} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default HomeTabsNavigator;
