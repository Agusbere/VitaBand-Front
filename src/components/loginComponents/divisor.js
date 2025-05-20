import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Divider = () => {
    return (
        <View style={styles.container}>
            <View style={styles.linea} />
            <Text style={styles.texto}>OR</Text>
            <View style={styles.linea} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 15,
    },
    linea: {
        flex: 1,
        height: 1,
        backgroundColor: '#ccc',
    },
    texto: {
        marginHorizontal: 10,
        color: '#999',
    },
});

export default Divider;
