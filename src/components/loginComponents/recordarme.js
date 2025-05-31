import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Recordarme = () => {
    const [activo, setActivo] = useState(true);

    return (
        <TouchableOpacity onPress={() => setActivo(!activo)} style={styles.container}>
            <View style={[styles.cuadro, activo && styles.cuadroActivo]}>
                {activo && (
                    <Ionicons name="checkmark" size={14} color="#fff" />
                )}
            </View>
            <Text style={styles.texto}>Remember For 30 Days</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '85%',
        marginTop: 4,
        marginBottom: 18,
    },
    cuadro: {
        width: 18,
        height: 18,
        borderRadius: 5,
        borderWidth: 1.5,
        borderColor: '#007AFF',
        marginRight: 8,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    cuadroActivo: {
        backgroundColor: '#007AFF',
        borderColor: '#007AFF',
    },
    texto: {
        color: '#333',
        fontFamily: 'PlusJakartaSans-Regular',
        fontSize: 12,
    },
});

export default Recordarme;
