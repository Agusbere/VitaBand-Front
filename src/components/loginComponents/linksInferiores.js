import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const EnlacesInferiores = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.texto}>
                Don't have an account?
                <Text style={styles.link} onPress={() => navigation.navigate('SignUp')}> Sign Up</Text>
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
                <Text style={styles.olvido}>Forgot Password</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginBottom: 15,
    },
    texto: {
        color: '#333',
    },
    link: {
        color: '#007bff',
        fontWeight: 'bold',
    },
    olvido: {
        color: '#007bff',
        marginTop: 8,
    },
});

export default EnlacesInferiores;
