import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Recordarme = () => {
    const [activo, setActivo] = useState(true);

    return (
        <TouchableOpacity onPress={() => setActivo(!activo)} style={styles.container}>
            <View style={[styles.circulo, activo && styles.activo]} />
            <Text style={styles.texto}>Remember For 30 Days</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '85%',
        marginVertical: 10,
    },
    circulo: {
        width: 16,
        height: 16,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#000',
        marginRight: 8,
    },
    activo: {
        backgroundColor: '#007AFF',
    },
    texto: {
        color: '#333',
    },
});

export default Recordarme;
