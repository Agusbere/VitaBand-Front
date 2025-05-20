import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Image, View } from 'react-native';

const BotonPrincipal = () => {
    return (
        <TouchableOpacity style={styles.boton}>
            <View style={styles.contenido}>
                <Text style={styles.texto}>Sign In</Text>
                <Image source={require('../../assets/images/verContra.png')} style={styles.icono} />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    boton: {
        backgroundColor: '#007bff',
        borderRadius: 30,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
    },
    contenido: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    texto: {
        color: '#fff',
        fontWeight: '600',
        marginRight: 6,
    },
    icono: {
        width: 16,
        height: 16,
        tintColor: '#fff',
    },
});

export default BotonPrincipal;
