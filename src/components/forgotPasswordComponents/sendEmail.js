import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const SendEmailButton = ({ onPress, disabled, emailSent }) => (
    <TouchableOpacity
        style={[styles.button, { backgroundColor: emailSent ? '#A0CFFF' : '#007FFF' }]}
        onPress={onPress}
        disabled={disabled}
    >
        <Text style={styles.buttonText}>
            {emailSent ? 'Email sent' : 'Send Email'}
        </Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        borderRadius: 25,
        height: 44,
        alignItems: 'center',
        justifyContent: 'center',
        width: '85%',
        marginTop: 18,
        marginBottom: 8,
    },
    buttonText: {
        color: '#fff',
        fontFamily: 'PlusJakartaSans-Bold',
        fontSize: 15,
    },
});

export default SendEmailButton;
