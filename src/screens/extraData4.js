import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ExtraData4 = ({ route, navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.successIcon}>
                    <Ionicons name="checkmark-circle" size={120} color="#10B981" />
                </View>
                
                <Text style={styles.title}>REGISTER SUCCESSFULLY COMPLETED</Text>
                
                <Text style={styles.message}>
                    Congratulations! Your profile has been successfully created. 
                    Welcome to VitaBand!
                </Text>
                
                <Text style={styles.subMessage}>
                    You're all set to start your journey with us.
                </Text>

                <TouchableOpacity 
                    style={styles.getStartedButton}
                    onPress={() => {
                        navigation.reset({
                            index: 0,
                            routes: [{ name: 'SplashScreen' }],
                        });
                    }}
                >
                    <Text style={styles.getStartedButtonText}>GET STARTED</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F7F7',
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        alignItems: 'center',
        paddingHorizontal: 40,
    },
    successIcon: {
        marginBottom: 30,
    },
    title: {
        fontSize: 28,
        fontFamily: 'PlusJakartaSans-Bold',
        color: '#10B981',
        textAlign: 'center',
        marginBottom: 20,
    },
    message: {
        fontSize: 18,
        fontFamily: 'PlusJakartaSans-Regular',
        color: '#333',
        textAlign: 'center',
        marginBottom: 15,
        lineHeight: 24,
    },
    subMessage: {
        fontSize: 16,
        fontFamily: 'PlusJakartaSans-Regular',
        color: '#666',
        textAlign: 'center',
        marginBottom: 40,
    },
    getStartedButton: {
        backgroundColor: '#10B981',
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 25,
        elevation: 3,
    },
    getStartedButtonText: {
        color: '#fff',
        fontFamily: 'PlusJakartaSans-Bold',
        fontSize: 18,
    },
});

export default ExtraData4;
