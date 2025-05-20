import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Titulo = () => {
    return (
        <View style={styles.contenedor}>
            <Text style={styles.textoNegro}>Sign in to <Text style={styles.textoAzul}>VitaBand</Text></Text>
        </View>
    );
};

const styles = StyleSheet.create({
    contenedor: {
        marginBottom: 30,
        alignItems: 'center',
    },
    textoNegro: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
    },
    textoAzul: {
        color: '#007bff',
    },
});

export default Titulo;
