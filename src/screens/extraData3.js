import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import RoleSelector from '../components/extraDataComponents/RoleSelector';
import BotonPrincipal from '../components/loginComponents/botonPrincipal';
import genericFetch from '../utils/genericFetch';

const ExtraData3 = ({ route, navigation }) => {
    const { userId, mail } = route.params;
    const [selectedRole, setSelectedRole] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleContinue = async () => {
        if (!selectedRole) {
            Alert.alert("Selection required", "Please select your role to continue.");
            return;
        }

        setLoading(true);

        try {
            // Aquí podrías actualizar el rol del usuario si es necesario
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
        <ScrollView contentContainerStyle={styles.container}>
            <TouchableOpacity 
                style={styles.backButton}
                onPress={() => navigation.goBack()}
            >
                <Ionicons name="arrow-back" size={24} color="#333" />
            </TouchableOpacity>

            <RoleSelector
                selectedRole={selectedRole}
                onRoleSelect={setSelectedRole}
            />

            <BotonPrincipal
                texto={loading ? "Finishing..." : "COMPLETE REGISTRATION"}
                onLogin={handleContinue}
                loading={loading}
                disabled={!selectedRole || loading}
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#F7F7F7',
        paddingHorizontal: 30,
        paddingTop: 60,
    },
    backButton: {
        position: 'absolute',
        top: 50,
        left: 20,
        zIndex: 1,
        padding: 10,
    },
});

export default ExtraData3;
