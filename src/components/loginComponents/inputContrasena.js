import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const InputContrasena = ({ label, value, onChangeText }) => {
    const [verPassword, setVerPassword] = useState(false);
    const [borderColor, setBorderColor] = useState('#ddd');
    const iconColor = "#aaa";

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <View style={[styles.inputWrapper, { borderColor }]}>
                <Ionicons name="lock-closed-outline" size={20} color={iconColor} />
                <TextInput
                    style={styles.input}
                    secureTextEntry={!verPassword}
                    placeholder={label}
                    placeholderTextColor="#aaa"
                    value={value}
                    onChangeText={onChangeText}
                    underlineColorAndroid="transparent"
                    onFocus={() => setBorderColor('#007bff')}
                    onBlur={() => setBorderColor('#ddd')}
                    outlineWidth={0}
                />
                <TouchableOpacity onPress={() => setVerPassword(!verPassword)}>
                    <Ionicons name={verPassword ? 'eye-off-outline' : 'eye-outline'} size={20} color={iconColor} />
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
        fontFamily: 'PlusJakartaSans-Regular',
        fontSize: 12,
    },
    inputWrapper: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 25,
        paddingHorizontal: 15,
        alignItems: 'center',
        borderWidth: 1,
    },
    input: {
        flex: 1,
        height: 40,
        marginHorizontal: 10,
        fontFamily: 'PlusJakartaSans-Regular',
        color: '#333',
        outlineWidth: 0,
    },
});

export default InputContrasena;