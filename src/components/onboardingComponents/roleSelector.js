import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const RoleSelector = ({ selectedRole, onRoleSelect }) => {
    const roles = [
        { id: 'bander', label: 'BANDER', description: 'I need help with my medications', icon: 'medical' },
        { id: 'hoster', label: 'HOSTER', description: 'I want to help others', icon: 'heart' }
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Choose your role</Text>
            <Text style={styles.subtitle}>Select how you want to use VitaBand</Text>
            
            <View style={styles.optionsContainer}>
                {roles.map((role) => (
                    <TouchableOpacity
                        key={role.id}
                        style={[
                            styles.option,
                            selectedRole === role.id && styles.selectedOption
                        ]}
                        onPress={() => onRoleSelect(role.id)}
                    >
                        <Ionicons
                            name={role.icon}
                            size={40}
                            color={selectedRole === role.id ? '#fff' : '#3B82F6'}
                        />
                        <Text style={[
                            styles.optionLabel,
                            selectedRole === role.id && styles.selectedOptionText
                        ]}>
                            {role.label}
                        </Text>
                        <Text style={[
                            styles.optionDescription,
                            selectedRole === role.id && styles.selectedOptionText
                        ]}>
                            {role.description}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 24,
        fontFamily: 'PlusJakartaSans-Bold',
        color: '#333',
        textAlign: 'center',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        fontFamily: 'PlusJakartaSans-Regular',
        color: '#666',
        textAlign: 'center',
        marginBottom: 30,
    },
    optionsContainer: {
        gap: 20,
    },
    option: {
        backgroundColor: '#f0f0f0',
        borderRadius: 15,
        padding: 30,
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#ddd',
    },
    selectedOption: {
        backgroundColor: '#3B82F6',
        borderColor: '#3B82F6',
    },
    optionLabel: {
        fontSize: 20,
        fontFamily: 'PlusJakartaSans-Bold',
        color: '#333',
        marginTop: 10,
    },
    optionDescription: {
        fontSize: 14,
        fontFamily: 'PlusJakartaSans-Regular',
        color: '#666',
        marginTop: 5,
        textAlign: 'center',
    },
    selectedOptionText: {
        color: '#fff',
    },
});

export default RoleSelector;
