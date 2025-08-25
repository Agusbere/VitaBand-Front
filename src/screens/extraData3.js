import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ExtraData3 = ({ route, navigation }) => {
    const { userId, mail } = route.params;

    return (
        <View style={styles.container}>
            <TouchableOpacity 
                style={styles.backButton}
                onPress={() => navigation.goBack()}
            >
                <Ionicons name="arrow-back" size={24} color="#333" />
            </TouchableOpacity>

            <View style={styles.content}>
                <View style={styles.successIcon}>
                    <Ionicons name="checkmark-circle" size={120} color="#10B981" />
                </View>
                
                <Text style={styles.title}>REGISTER SUCCESSFULLY COMPLETED</Text>
                
                <Text style={styles.message}>
                    Congratulations! Your profile has been successfully created. 
                    Now let's choose how you want to use VitaBand.
                </Text>
                
                <Text style={styles.subMessage}>
                    Select your role to continue to your personalized experience.
                </Text>

                <TouchableOpacity 
                    style={styles.continueButton}
                    onPress={() => navigation.navigate('RoleScreen', { userId, mail })}
                >
                    <Text style={styles.continueButtonText}>CONTINUE</Text>
                    <Ionicons name="arrow-forward" size={20} color="#fff" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F7F7',
        paddingHorizontal: 30,
    },
    backButton: {
        position: 'absolute',
        top: 50,
        left: 20,
        zIndex: 1,
        padding: 10,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 40,
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
        paddingHorizontal: 20,
    },
    subMessage: {
        fontSize: 16,
        fontFamily: 'PlusJakartaSans-Regular',
        color: '#666',
        textAlign: 'center',
        marginBottom: 40,
        paddingHorizontal: 20,
    },
    continueButton: {
        backgroundColor: '#10B981',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 25,
        marginTop: 20,
    },
    continueButtonText: {
        color: '#fff',
        fontFamily: 'PlusJakartaSans-Bold',
        fontSize: 16,
        marginRight: 10,
    },
});

export default ExtraData3;
