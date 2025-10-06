import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = ({ navigation }) => {
  const logout = async () => {
    try {
      await AsyncStorage.multiRemove(['authToken', 'userRole', 'lastRoute']);
    } catch {}
    navigation.reset({ index: 0, routes: [{ name: 'Login' }] });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Profile</Text>
      <TouchableOpacity style={styles.logout} onPress={logout} activeOpacity={0.9}>
        <Text style={styles.logoutText}>Cerrar sesión</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#F7F7F7',
    paddingHorizontal: 24,
  },
  text: {
    fontFamily: "PlusJakartaSans-Bold",
    fontSize: 20,
  },
  logout: {
    marginTop: 16,
    backgroundColor: '#EF4444',
    borderRadius: 16,
    height: 44,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoutText: {
    color: '#fff',
    fontFamily: 'PlusJakartaSans-Bold',
  }
});

export default Profile;
