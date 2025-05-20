import React from 'react';
import { View, TextInput, StyleSheet, Image, Text } from 'react-native';

const CampoEmail = () => {
    return (
        <View style={styles.contenedor}>
            <Text style={styles.label}>Email Address</Text>
            <View style={styles.inputContainer}>
                <Image source={require('../../assets/images/mail.png')} style={styles.icono} />
                <TextInput placeholder="Enter your email" style={styles.input} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    contenedor: {
        marginBottom: 20,
    },
    label: {
        fontWeight: '600',
        marginBottom: 6,
        color: '#333',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 30,
        paddingHorizontal: 15,
        height: 45,
    },
    icono: {
        width: 20,
        height: 20,
        marginRight: 10,
    },
    input: {
        flex: 1,
    },
});

export default CampoEmail;
