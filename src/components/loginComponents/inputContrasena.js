import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const InputContrasena = ({ label = "Password" }) => {
    const [verPassword, setVerPassword] = useState(false);

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.inputWrapper}>
                <Ionicons name="lock-closed-outline" size={20} color="#333" />
                <TextInput
                    style={styles.input}
                    secureTextEntry={!verPassword}
                    placeholder={`Enter your ${label.toLowerCase()}`}
                />
                <TouchableOpacity onPress={() => setVerPassword(!verPassword)}>
                    <Ionicons name={verPassword ? 'eye-off-outline' : 'eye-outline'} size={20} color="#333" />
                </TouchableOpacity>
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
        marginHorizontal: 10,
    },
});

export default InputContrasena;
