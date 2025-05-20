import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EnlacesInferiores = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>
                Don't have an account?
                <Text style={styles.link}> Sign Up</Text>
            </Text>
            <Text style={styles.olvido}>Forgot Password</Text>
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
