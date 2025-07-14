import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const OnboardingStep4 = ({ onSelectRole }) => {
  const [selected, setSelected] = useState(null);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>¿Qué rol quieres tener?</Text>
      <TouchableOpacity
        style={[styles.option, selected === 'bander' && styles.selectedOption]}
        onPress={() => setSelected('bander')}
      >
        <Text style={styles.optionText}>Bander</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.option, selected === 'hoster' && styles.selectedOption]}
        onPress={() => setSelected('hoster')}
      >
        <Text style={styles.optionText}>Hoster</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: selected ? '#00B2FF' : '#A0A0A0' }]}
        onPress={() => selected && onSelectRole(selected)}
        disabled={!selected}
      >
        <Text style={styles.buttonText}>Continuar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6FA',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1A1A1A',
    marginBottom: 20,
    textAlign: 'center',
  },
  option: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 18,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    alignItems: 'center',
  },
  selectedOption: {
    borderColor: '#00B2FF',
    borderWidth: 2,
  },
  optionText: {
    fontSize: 18,
    color: '#1A1A1A',
    fontWeight: 'bold',
  },
  button: {
    width: '100%',
    paddingVertical: 14,
    borderRadius: 24,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default OnboardingStep4; 