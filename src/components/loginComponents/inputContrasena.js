import React from 'react';
import { View, TextInput, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';

const CampoContrasena = () => {
    return (
        <View style={styles.contenedor}>
            <Text style={styles.label}>Password</Text>
            <View style={styles.inputContainer}>
                <Image source={require('../../assets/images/contrasena.png')} style={styles.icono} />
                <TextInput placeholder="Enter your password" secureTextEntry style={styles.input} />
                <TouchableOpacity>
                    <Image source={require('../../assets/images/verContra.png')} style={styles.icono} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    contenedor: {
        marginBottom: 15,
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

export default CampoContrasena;
