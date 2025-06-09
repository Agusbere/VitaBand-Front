import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const ResendEmailButton = ({ onPress, canResend, resendTimer }) => (
    <TouchableOpacity
        style={[styles.resendButton, { backgroundColor: canResend ? '#007FFF' : '#E6F0FA' }]}
        onPress={onPress}
        disabled={!canResend}
    >
        <Text style={[styles.resendButtonText, { color: canResend ? '#fff' : '#007FFF' }]}>
            Resend Email{!canResend ? ` (${resendTimer}s)` : ''}
        </Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    resendButton: {
        flexDirection: 'row',
        borderRadius: 25,
        height: 44,
        alignItems: 'center',
        justifyContent: 'center',
        width: '85%',
        marginTop: 8,
    },
    resendButtonText: {
        fontFamily: 'PlusJakartaSans-Bold',
        fontSize: 15,
    },
});

export default ResendEmailButton;
