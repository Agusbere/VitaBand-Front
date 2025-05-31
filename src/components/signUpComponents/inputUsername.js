import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const InputUsername = ({ value, onChangeText }) => {
    const [borderColor, setBorderColor] = useState('#ddd');
    const iconColor = "#aaa";

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Username</Text>
            <View style={[styles.inputWrapper, { borderColor }]}>
                <Ionicons name="person-outline" size={20} color={iconColor} />
                <TextInput
                    style={styles.input}
                    placeholder="Enter your username"
                    placeholderTextColor="#aaa"
                    autoCapitalize="none"
                    value={value}
                    onChangeText={onChangeText}
                    underlineColorAndroid="transparent"
                    onFocus={() => setBorderColor('#007bff')}
                    onBlur={() => setBorderColor('#ddd')}
                    outlineWidth={0}
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
        marginLeft: 10,
        fontFamily: 'PlusJakartaSans-Regular',
        color: '#333',
        outlineWidth: 0,
    },
});

export default InputUsername;
