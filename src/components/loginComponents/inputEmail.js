import React from 'react';
import { View, TextInput, Image, StyleSheet, Text } from 'react-native';
import mailIcon from '../../../assets/icons/mail.png';

const InputEmail = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Email Address</Text>
            <View style={styles.inputWrapper}>
                <Image source={mailIcon} style={styles.icono} />
                <TextInput style={styles.input} placeholder="Enter your email" keyboardType="email-address" />
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
    icono: {
        width: 20,
        height: 20,
        marginRight: 10,
    },
    input: {
        flex: 1,
        height: 40,
    },
});

export default InputEmail;
