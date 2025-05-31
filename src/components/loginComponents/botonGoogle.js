import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import googleLogo from '../../../assets/icons/google-logo.png';

const BotonGoogle = () => {
    return (
        <TouchableOpacity style={styles.boton}>
            <Image source={googleLogo} style={styles.icono} />
            <Text style={styles.texto}>Sign In with Google</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    boton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingVertical: 12,
        borderRadius: 10,
        width: '85%',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#ddd',
    },
    texto: {
        color: '#000',
        fontFamily: 'PlusJakartaSans-Bold',
        marginLeft: 10,
    },
    icono: {
        width: 20,
        height: 20,
    },
});

export default BotonGoogle;
