import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const getStrength = (password) => {
    let score = 0;
    if (password.length > 7) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;
    if (password.length > 12) score++;

    if (!password) return { label: 'None', color: '#aaa', fill: 0 };
    if (score <= 1) return { label: 'Weak', color: '#e74c3c', fill: 1 };
    if (score === 2) return { label: 'Medium', color: '#f1c40f', fill: 2 };
    if (score === 3 || score === 4) return { label: 'Strong', color: '#27ae60', fill: 3 };
    if (score >= 5) return { label: 'Very Strong', color: '#145c2c', fill: 4 };
};

export const isStrongPassword = (password) => {
    let score = 0;
    if (password.length > 7) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;
    if (password.length > 12) score++;
    return score >= 3;
};

const PasswordStrengthMeter = ({ password }) => {
    const { label, color, fill } = getStrength(password);

    return (
        <View style={styles.container}>
            <Text style={styles.label}>
                Password strength: <Text style={{ color, fontWeight: 'bold' }}>{label}</Text>
            </Text>
            <View style={styles.barContainer}>
                {[0, 1, 2, 3].map((i) => (
                    <View
                        key={i}
                        style={[
                            styles.bar,
                            {
                                backgroundColor: fill > i ? color : '#eee',
                                marginRight: i < 3 ? 4 : 0,
                            },
                        ]}
                    />
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '85%',
        marginBottom: 10,
    },
    label: {
        fontSize: 13,
        color: '#555',
        marginBottom: 2,
        fontFamily: 'PlusJakartaSans-Regular',
    },
    barContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
    },
    bar: {
        flex: 1,
        height: 5,
        borderRadius: 2,
    },
});

export default PasswordStrengthMeter;