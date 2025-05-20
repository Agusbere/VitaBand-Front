import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Image, View } from 'react-native';

const BotonFacebook = () => {
    return (
        <TouchableOpacity style={styles.boton}>
            <View style={styles.contenido}>
                <Image source={require('../../assets/images/facebook-logo.png')} style={styles.logo} />
                <Text style={styles.texto}>Sign In with Facebook</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    boton: {
        backgroundColor: '#007bff',
        borderRadius: 10,
        padding: 12,
        marginBottom: 10,
    },
    contenido: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 20,
        height: 20,
        marginRight: 8,
    },
    texto: {
        color: '#fff',
        fontWeight: '600',
    },
});

export default BotonFacebook;
