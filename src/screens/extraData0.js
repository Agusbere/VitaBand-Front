import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ExtraData0 = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#F7F7F7" />
            
            <View style={styles.content}>
                <Image 
                    source={require('../../assets/images/login.png')} 
                    style={styles.image}
                    resizeMode="contain"
                />
                
                <Text style={styles.title}>BEFORE STARTING</Text>
                
                <Text style={styles.description}>
                    Welcome to VitaBand! Before we begin, we need to complete your profile setup. 
                    This will help us provide you with the best experience possible.
                </Text>
                
                <Text style={styles.steps}>
                    In the next steps, you'll provide:
                    {'\n'}• Your personal information
                    {'\n'}• Profile picture (optional)
                    {'\n'}• Your role preference
                </Text>
            </View>
            
            <TouchableOpacity 
                style={styles.continueButton}
                onPress={() => navigation.navigate('ExtraData1')}
            >
                <Text style={styles.continueButtonText}>CONTINUE</Text>
                <Ionicons name="arrow-forward" size={20} color="#fff" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F7F7',
        paddingHorizontal: 30,
        justifyContent: 'space-between',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 300,
        height: 300,
        marginBottom: 30,
    },
    title: {
        fontSize: 28,
        fontFamily: 'PlusJakartaSans-Bold',
        color: '#333',
        marginBottom: 20,
        textAlign: 'center',
    },
    description: {
        fontSize: 16,
        fontFamily: 'PlusJakartaSans-Regular',
        color: '#666',
        textAlign: 'center',
        lineHeight: 24,
        marginBottom: 20,
    },
    steps: {
        fontSize: 14,
        fontFamily: 'PlusJakartaSans-Regular',
        color: '#888',
        textAlign: 'center',
        lineHeight: 22,
    },
    continueButton: {
        backgroundColor: '#3B82F6',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
        borderRadius: 25,
        marginBottom: 40,
        marginHorizontal: 20,
    },
    continueButtonText: {
        color: '#fff',
        fontFamily: 'PlusJakartaSans-Bold',
        fontSize: 16,
        marginRight: 10,
    },
});

export default ExtraData0;
