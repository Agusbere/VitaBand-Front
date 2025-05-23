import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const BotonPrincipal = ({ onLogin }) => {
  return (
    <TouchableOpacity style={styles.boton} onPress={onLogin}>
      <Text style={styles.texto}>Sign In</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  boton: {
    backgroundColor: '#3B82F6',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
  },
  texto: {
    color: '#fff',
    fontFamily: 'PlusJakartaSans-Bold',
    fontSize: 16,
  },
});

export default BotonPrincipal;