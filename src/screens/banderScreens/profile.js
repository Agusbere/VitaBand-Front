import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BanderProfile = ({ navigation }) => {
    const logout = async () => {
        try {
            await AsyncStorage.multiRemove(['authToken', 'userRole', 'lastRoute']);
        } catch {}
        navigation.reset({ index: 0, routes: [{ name: 'Login' }] });
    };

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <Text style={styles.title}>Bander Profile</Text>
                <TouchableOpacity style={styles.logout} onPress={logout} activeOpacity={0.9}>
                    <Text style={styles.logoutText}>Cerrar sesión</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F7F7',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontFamily: 'PlusJakartaSans-Bold',
        fontSize: 20,
        color: '#111827',
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

export default BanderProfile;


