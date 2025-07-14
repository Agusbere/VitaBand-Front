import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';
import googleLogo from '../../../assets/icons/google-logo.png';

const BotonGoogle = ({ disabled = false, loading = false, onPress }) => {
    return (
        <TouchableOpacity 
            style={[styles.boton, (disabled || loading) && styles.botonDisabled]} 
            onPress={onPress}
            disabled={disabled || loading}
        >
            {loading ? (
                <ActivityIndicator size="small" color="#000" style={styles.spinner} />
            ) : (
                <Image source={googleLogo} style={styles.icono} />
            )}
            <Text style={styles.texto}>
                {loading ? "Connecting..." : "Sign In with Google"}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    boton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingVertical: 12,
        borderRadius: 10,
        width: '85%',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#ddd',
    },
    botonDisabled: {
        backgroundColor: '#f5f5f5',
        opacity: 0.7,
        borderColor: '#ccc',
    },
    texto: {
        color: '#000',
        fontFamily: 'PlusJakartaSans-Bold',
        marginLeft: 10,
    },
    icono: {
        width: 20,
        height: 20,
    },
    spinner: {
        marginRight: 10,
    },
});

export default BotonGoogle;
