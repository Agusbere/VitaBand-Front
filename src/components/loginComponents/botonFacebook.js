import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import facebookLogo from '../../../assets/icons/facebook-logo.png';

const BotonFacebook = () => {
    return (
        <TouchableOpacity style={styles.boton}>
            <Image source={facebookLogo} style={styles.icono} />
            <Text style={styles.texto}>Sign In with Facebook</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    boton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#1877F2',
        paddingVertical: 12,
        borderRadius: 10,
        width: '85%',
        justifyContent: 'center',
        marginBottom: 10,
    },
    texto: {
        color: '#fff',
        marginLeft: 10,
        fontFamily: 'PlusJakartaSans-Bold',
    },
    icono: {
        width: 28,
        height: 28,
        resizeMode: 'contain',
    },
});

export default BotonFacebook;
