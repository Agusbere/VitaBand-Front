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
        width: '100%',
        alignSelf: 'center',
    },
    linea: {
        flex: 1,
        height: 2,
        backgroundColor: '#bbb',
        borderRadius: 2,
        marginHorizontal: 1,
    },
    texto: {
        marginHorizontal: 10,
        color: '#999',
        fontFamily: 'PlusJakartaSans-Regular',
    },
});

export default Divider;
