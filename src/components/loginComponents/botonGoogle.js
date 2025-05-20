import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Image, View } from 'react-native';

const BotonGoogle = () => {
    return (
        <TouchableOpacity style={styles.boton}>
            <View style={styles.contenido}>
                <Image source={require('../../assets/images/google-logo.png')} style={styles.logo} />
                <Text style={styles.texto}>Sign In with Google</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    boton: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 12,
        borderWidth: 1,
        borderColor: '#ccc',
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
        color: '#333',
        fontWeight: '600',
    },
});

export default BotonGoogle;
