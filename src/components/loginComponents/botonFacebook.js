import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';
import facebookLogo from '../../../assets/icons/facebook-logo.png';

const BotonFacebook = ({ disabled = false, loading = false, onPress }) => {
    return (
        <TouchableOpacity 
            style={[styles.boton, (disabled || loading) && styles.botonDisabled]} 
            onPress={onPress}
            disabled={disabled || loading}
        >
            {loading ? (
                <ActivityIndicator size="small" color="#fff" style={styles.spinner} />
            ) : (
                <Image source={facebookLogo} style={styles.icono} />
            )}
            <Text style={styles.texto}>
                {loading ? "Connecting..." : "Sign In with Facebook"}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    boton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#1877F2',
        paddingVertical: 12,
        borderRadius: 10,
        width: '85%',
        justifyContent: 'center',
        marginBottom: 10,
    },
    botonDisabled: {
        backgroundColor: '#8DB9FF',
        opacity: 0.7,
    },
    texto: {
        color: '#fff',
        marginLeft: 10,
        fontFamily: 'PlusJakartaSans-Bold',
    },
    icono: {
        width: 28,
        height: 28,
        resizeMode: 'contain',
    },
    spinner: {
        marginRight: 10,
    },
});

export default BotonFacebook;
