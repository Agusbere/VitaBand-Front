import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const RoleScreen = ({ route, navigation }) => {
    const { userId, mail } = route.params;
    const [selectedRole, setSelectedRole] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleRoleSelect = (role) => {
        setSelectedRole(role);
    };

    const handleContinue = async () => {
        if (!selectedRole) {
            Alert.alert("Selection required", "Please select your role to continue.");
            return;
        }

        setLoading(true);

        try {
            // Aquí podrías actualizar el rol del usuario en la base de datos si es necesario
            // Por ahora, simplemente navegamos según la selección
            
            if (selectedRole === 'bander') {
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'BanderHome' }],
                });
            } else {
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'HosterHome' }],
                });
            }

        } catch (error) {
            Alert.alert("Error", "Failed to complete registration. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity 
                style={styles.backButton}
                onPress={() => navigation.goBack()}
            >
                <Ionicons name="arrow-back" size={24} color="#333" />
            </TouchableOpacity>

            <View style={styles.content}>
                <Text style={styles.title}>Choose Your Role</Text>
                <Text style={styles.subtitle}>Select how you want to use VitaBand</Text>

                <View style={styles.optionsContainer}>
                    <TouchableOpacity
                        style={[
                            styles.option,
                            selectedRole === 'bander' && styles.selectedOption
                        ]}
                        onPress={() => handleRoleSelect('bander')}
                    >
                        <Ionicons
                            name="medical"
                            size={40}
                            color={selectedRole === 'bander' ? '#fff' : '#3B82F6'}
                        />
                        <Text style={[
                            styles.optionLabel,
                            selectedRole === 'bander' && styles.selectedOptionText
                        ]}>
                            BANDER
                        </Text>
                        <Text style={[
                            styles.optionDescription,
                            selectedRole === 'bander' && styles.selectedOptionText
                        ]}>
                            I need help with my medications
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[
                            styles.option,
                            selectedRole === 'hoster' && styles.selectedOption
                        ]}
                        onPress={() => handleRoleSelect('hoster')}
                    >
                        <Ionicons
                            name="heart"
                            size={40}
                            color={selectedRole === 'hoster' ? '#fff' : '#3B82F6'}
                        />
                        <Text style={[
                            styles.optionLabel,
                            selectedRole === 'hoster' && styles.selectedOptionText
                        ]}>
                            HOSTER
                        </Text>
                        <Text style={[
                            styles.optionDescription,
                            selectedRole === 'hoster' && styles.selectedOptionText
                        ]}>
                            I want to help others
                        </Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity 
                    style={[
                        styles.continueButton,
                        !selectedRole && styles.continueButtonDisabled
                    ]}
                    onPress={handleContinue}
                    disabled={!selectedRole || loading}
                >
                    <Text style={styles.continueButtonText}>
                        {loading ? "PROCESSING..." : "CONTINUE"}
                    </Text>
                    {!loading && <Ionicons name="arrow-forward" size={20} color="#fff" />}
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F7F7',
        paddingHorizontal: 30,
    },
    backButton: {
        position: 'absolute',
        top: 50,
        left: 20,
        zIndex: 1,
        padding: 10,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 40,
    },
    title: {
        fontSize: 28,
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
        marginBottom: 40,
    },
    optionsContainer: {
        width: '100%',
        gap: 20,
        marginBottom: 40,
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
    continueButton: {
        backgroundColor: '#3B82F6',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 25,
        minWidth: 200,
    },
    continueButtonDisabled: {
        backgroundColor: '#ccc',
    },
    continueButtonText: {
        color: '#fff',
        fontFamily: 'PlusJakartaSans-Bold',
        fontSize: 16,
        marginRight: 10,
    },
});

export default RoleScreen;
