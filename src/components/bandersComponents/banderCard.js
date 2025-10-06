import React, { useMemo } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const BanderCard = ({ user, onPress }) => {
    const styles = useMemo(() => StyleSheet.create({
        container: {
            backgroundColor: '#fff',
            borderRadius: 16,
            marginHorizontal: 16,
            paddingVertical: 14,
            paddingHorizontal: 16,
            marginBottom: 10,
            borderWidth: 1,
            borderColor: '#E5E7EB',
        },
        name: {
            fontFamily: 'PlusJakartaSans-SemiBold',
            fontSize: 16,
            color: '#111827',
            marginBottom: 4,
        },
        mail: {
            fontFamily: 'PlusJakartaSans-Regular',
            fontSize: 13,
            color: '#6B7280',
        },
    }), []);

    const displayName = user?.name || user?.surname
        ? `${user?.name || ''} ${user?.surname || ''}`.trim()
        : user?.mail;

    return (
        <TouchableOpacity onPress={() => onPress && onPress(user)} activeOpacity={0.85}>
            <View style={styles.container}>
                <Text style={styles.name}>{displayName}</Text>
                <Text style={styles.mail}>{user?.mail}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default BanderCard;


