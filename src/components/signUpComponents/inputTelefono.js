import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const InputTelefono = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Phone Number</Text>
            <View style={styles.inputWrapper}>
                <Ionicons name="call-outline" size={20} color="#333" />
                <TextInput
                    style={styles.input}
                    placeholder="Enter your phone number"
                    keyboardType="phone-pad"
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '85%',
        marginBottom: 15,
    },
    label: {
        marginBottom: 5,
        color: '#333',
    },
    inputWrapper: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 25,
        paddingHorizontal: 15,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ddd',
    },
    input: {
        flex: 1,
        height: 40,
        marginLeft: 10,
    },
});

export default InputTelefono;
