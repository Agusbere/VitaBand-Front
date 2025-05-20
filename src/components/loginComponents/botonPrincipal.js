import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, Image } from 'react-native';
import logo from '../../../assets/images/login.png';

const BotonLogin = () => {
    return (
        <TouchableOpacity style={styles.boton}>
            <Text style={styles.texto}>Sign In</Text>
            <Image source={logo} style={styles.icono} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    boton: {
        backgroundColor: '#007AFF',
        paddingVertical: 12,
        borderRadius: 25,
        width: '85%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
    },
    texto: {
        color: '#fff',
        fontWeight: 'bold',
        marginRight: 10,
    },
    icono: {
        width: 20,
        height: 20,
    },
});

export default BotonLogin;
