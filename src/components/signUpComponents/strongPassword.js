import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const getStrength = (password) => {
    let score = 0;
    if (password.length > 7) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;
    if (!password) return { label: 'None', color: '#aaa' };
    if (score <= 1) return { label: 'Weak', color: '#e74c3c' };
    if (score === 2) return { label: 'Medium', color: '#f1c40f' };
    return { label: 'Strong', color: '#27ae60' };
};

const PasswordStrengthMeter = ({ password }) => {
    const { label, color } = getStrength(password);

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Password strength: <Text style={{ color }}>{label}</Text></Text>
            <View style={[styles.bar, { backgroundColor: color }]} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginBottom: 10,
    },
    label: {
        fontSize: 13,
        color: '#555',
        marginBottom: 2,
    },
    bar: {
        height: 4,
        borderRadius: 2,
        width: '100%',
    },
});

export default PasswordStrengthMeter;