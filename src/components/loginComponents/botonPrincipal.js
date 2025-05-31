import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const BotonPrincipal = ({ onLogin, texto = "Sign In" }) => {
  return (
    <TouchableOpacity style={styles.boton} onPress={onLogin}>
      <View style={styles.content}>
        <Text style={styles.texto}>{texto}</Text>
        <Ionicons name="log-in-outline" size={20} color="#fff" style={styles.icon} />
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
});

export default BotonPrincipal;