import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const RoleSelector = ({ role, setRole }) => (
    <View style={styles.container}>
        <Text style={styles.label}>Choose your role:</Text>
        <View style={styles.roleContainer}>
            <TouchableOpacity
                style={[styles.roleButton, role === 'Bander' && styles.active]}
                onPress={() => setRole('Bander')}
            >
                <Text style={[styles.roleText, role === 'Bander' && styles.activeText]}>Bander</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.roleButton, role === 'Hoster' && styles.active]}
                onPress={() => setRole('Hoster')}
            >
                <Text style={[styles.roleText, role === 'Hoster' && styles.activeText]}>Hoster</Text>
            </TouchableOpacity>
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginBottom: 18,
    },
    label: {
        fontSize: 15,
        color: '#222',
        marginBottom: 8,
    },
    roleContainer: {
        flexDirection: 'row',
        backgroundColor: '#F1F3F6',
        borderRadius: 20,
        alignSelf: 'stretch',
        justifyContent: 'center',
        padding: 4,
    },
    roleButton: {
        flex: 1,
        paddingVertical: 10,
        borderRadius: 16,
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    active: {
        backgroundColor: '#2196F3',
    },
    roleText: {
        color: '#2196F3',
        fontWeight: '600',
        fontSize: 16,
    },
    activeText: {
        color: '#fff',
    },
});

export default RoleSelector;