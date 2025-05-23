import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./src/home.js";
import Banders from "./src/banders.js";
import Calendar from "./src/calendar.js";
import Profile from "./src/profile.js";
import NewMedication from "./src/newMedication.js";
import CustomTabBar from "./src/components/navigationBar.js";

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
