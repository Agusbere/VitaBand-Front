import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import RoleSelector from '../components/onboardingComponents/roleSelector';

const RoleScreen = ({ navigation }) => {
  const [role, setRole] = useState(null);

  const handleFinish = () => {
    if (role === 'bander') {
      navigation.replace('BanderHome');
    } else if (role === 'hoster') {
      navigation.replace('HosterHome');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <RoleSelector selectedRole={role} onRoleSelect={setRole} />
      </View>
      <TouchableOpacity
        style={[styles.button, !role && styles.buttonDisabled]}
        onPress={handleFinish}
        disabled={!role}
        activeOpacity={0.9}
      >
        <Text style={styles.buttonText}>Listo</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    paddingHorizontal: 24,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#007FFF',
    borderRadius: 25,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  buttonDisabled: {
    backgroundColor: '#93C5FD',
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'PlusJakartaSans-Bold',
    fontSize: 16,
  },
});

export default RoleScreen;


