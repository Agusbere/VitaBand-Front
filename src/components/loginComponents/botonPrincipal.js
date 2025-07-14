import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const BotonPrincipal = ({ onLogin, texto = "Sign In", loading = false, disabled = false }) => {
  return (
    <TouchableOpacity 
      style={[styles.boton, (disabled || loading) && styles.botonDisabled]} 
      onPress={onLogin}
      disabled={disabled || loading}
    >
      <View style={styles.content}>
        {loading ? (
          <>
            <ActivityIndicator size="small" color="#fff" style={styles.spinner} />
            <Text style={styles.texto}>{texto}</Text>
          </>
        ) : (
          <>
            <Text style={styles.texto}>{texto}</Text>
            <Ionicons name="log-in-outline" size={20} color="#fff" style={styles.icon} />
          </>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  boton: {
    backgroundColor: '#3B82F6',
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 20,
    width: '85%',
    alignSelf: 'center',
  },
  botonDisabled: {
    backgroundColor: '#93C5FD',
    opacity: 0.7,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    color: '#fff',
    fontFamily: 'PlusJakartaSans-Bold',
    fontSize: 15,
    marginRight: 8,
  },
  icon: {
    marginTop: 1,
  },
  spinner: {
    marginRight: 8,
  },
});

export default BotonPrincipal;