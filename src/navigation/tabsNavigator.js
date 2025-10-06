import React, { useEffect, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HosterHome from "../screens/hosterScreens/hosterHome.js";
import BanderHome from "../screens/banderScreens/banderHome.js";
import Banders from "../screens/hosterScreens/banders.js";
import Calendar from "../screens/calendar.js";
import Profile from "../screens/profile.js";
import BanderProfile from "../screens/banderScreens/profile.js";
import NewMedication from "../screens/hosterScreens/newMedication.js";
import CustomTabBar from "./navigationBar.js";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Tab = createBottomTabNavigator();

const HomeTabsNavigator = () => {
  const [role, setRole] = useState(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const r = await AsyncStorage.getItem('userRole');
        if (mounted) setRole(r || 'hoster');
      } catch {
        if (mounted) setRole('hoster');
      }
    })();
    return () => { mounted = false; };
  }, []);

  const HomeComponent = role === 'bander' ? BanderHome : HosterHome;
  const ProfileComponent = role === 'bander' ? BanderProfile : Profile;

  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tab.Screen name="Home" component={HomeComponent} />
      {role !== 'bander' && <Tab.Screen name="Banders" component={Banders} />}
      {role !== 'bander' && <Tab.Screen name="NewMedication" component={NewMedication} />}
      <Tab.Screen name="Calendar" component={Calendar} />
      <Tab.Screen name="Profile" component={ProfileComponent} />
    </Tab.Navigator>
  );
};

export default HomeTabsNavigator;
