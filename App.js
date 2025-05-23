import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import LoginScreen from './src/login';
import AppNavigator from './appNavigator.js'
import TabsNavigator from './tabsNavigator.js'

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'PlusJakartaSans-Bold': require('./assets/fonts/plusJakartaSans/PlusJakartaSans-Bold.ttf'),
    'PlusJakartaSans-BoldItalic': require('./assets/fonts/plusJakartaSans/PlusJakartaSans-BoldItalic.ttf'),
    'PlusJakartaSans-ExtraBold': require('./assets/fonts/plusJakartaSans/PlusJakartaSans-ExtraBold.ttf'),
    'PlusJakartaSans-ExtraBoldItalic': require('./assets/fonts/plusJakartaSans/PlusJakartaSans-ExtraBoldItalic.ttf'),
    'PlusJakartaSans-ExtraLight': require('./assets/fonts/plusJakartaSans/PlusJakartaSans-ExtraLight.ttf'),
    'PlusJakartaSans-ExtraLightItalic': require('./assets/fonts/plusJakartaSans/PlusJakartaSans-ExtraLightItalic.ttf'),
    'PlusJakartaSans-Italic': require('./assets/fonts/plusJakartaSans/PlusJakartaSans-Italic.ttf'),
    'PlusJakartaSans-Light': require('./assets/fonts/plusJakartaSans/PlusJakartaSans-Light.ttf'),
    'PlusJakartaSans-LightItalic': require('./assets/fonts/plusJakartaSans/PlusJakartaSans-LightItalic.ttf'),
    'PlusJakartaSans-Medium': require('./assets/fonts/plusJakartaSans/PlusJakartaSans-Medium.ttf'),
    'PlusJakartaSans-MediumItalic': require('./assets/fonts/plusJakartaSans/PlusJakartaSans-MediumItalic.ttf'),
    'PlusJakartaSans-Regular': require('./assets/fonts/plusJakartaSans/PlusJakartaSans-Regular.ttf'),
    'PlusJakartaSans-SemiBold': require('./assets/fonts/plusJakartaSans/PlusJakartaSans-SemiBold.ttf'),
    'PlusJakartaSans-SemiBoldItalic': require('./assets/fonts/plusJakartaSans/PlusJakartaSans-SemiBoldItalic.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

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
}
