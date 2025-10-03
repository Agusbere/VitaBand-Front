import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import DateTimePicker from '@react-native-community/datetimepicker';
import GoBackButton from '../../navigation/goBackButton';
import genericFetch from '../../utils/genericFetch';

const OnBoardingExtraData1 = ({ navigation }) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [idGender, setIdGender] = useState(null);
  const [birthdate, setBirthdate] = useState(null);
  const [showPicker, setShowPicker] = useState(false);
  const [genders, setGenders] = useState([]);

  useEffect(() => {
    genericFetch('/api/users/genders')
      .then(setGenders)
      .catch(() => setGenders([
        { id: 1, name: 'Male' },
        { id: 2, name: 'Female' },
        { id: 3, name: 'Other' },
      ]));
  }, []);

  const isValid = Boolean(name && surname && idGender && birthdate);

  const handleContinue = async () => {
    try {
      const isoDate = birthdate ? new Date(birthdate).toISOString().split('T')[0] : null;
      await genericFetch('/api/users/extra-data-1', 'PUT', {
        name,
        surname,
        birthdate: isoDate,
        id_gender: idGender,
      });
      navigation.replace('OnBoardingExtraData2');
    } catch (err) {
      Alert.alert('Error', 'No se pudieron guardar los datos.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <GoBackButton onPress={() => navigation.replace('OnBoardingExtraData0')} />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Complete your profile</Text>
        <View style={styles.field}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="Enter your name"
            placeholderTextColor="#9AA4B2"
          />
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Surname</Text>
          <TextInput
            style={styles.input}
            value={surname}
            onChangeText={setSurname}
            placeholder="Enter your surname"
            placeholderTextColor="#9AA4B2"
          />
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Gender</Text>
          <View style={styles.genderRow}>
            {genders.map((g) => (
              <TouchableOpacity
                key={g.id}
                style={[styles.chip, idGender === g.id && styles.chipSelected]}
                onPress={() => setIdGender(g.id)}
              >
                <Text style={[styles.chipText, idGender === g.id && styles.chipTextSelected]}>
                  {g.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Birthdate</Text>
          <TouchableOpacity style={styles.input} onPress={() => setShowPicker(true)}>
            <Text style={{ color: birthdate ? '#111' : '#9AA4B2' }}>
              {birthdate ? new Date(birthdate).toDateString() : 'Select your birthdate'}
            </Text>
          </TouchableOpacity>
          {showPicker && (
            <DateTimePicker
              value={birthdate ? new Date(birthdate) : new Date(2000, 0, 1)}
              mode="date"
              display="default"
              onChange={(e, d) => {
                setShowPicker(false);
                if (d) setBirthdate(d);
              }}
            />
          )}
        </View>
      </View>
      <TouchableOpacity
        style={[styles.button, !isValid && styles.buttonDisabled]}
        onPress={handleContinue}
        disabled={!isValid}
        activeOpacity={0.9}
      >
        <Text style={styles.buttonText}>Continue</Text>
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
  header: {
    paddingTop: 8,
    paddingBottom: 8,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 22,
    fontFamily: 'PlusJakartaSans-Bold',
    color: '#222',
    marginBottom: 16,
  },
  field: {
    marginBottom: 14,
  },
  label: {
    fontSize: 14,
    color: '#475569',
    fontFamily: 'PlusJakartaSans-SemiBold',
    marginBottom: 8,
  },
  input: {
    height: 48,
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    justifyContent: 'center',
  },
  genderRow: {
    flexDirection: 'row',
    gap: 10,
  },
  chip: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: '#E6F0FA',
  },
  chipSelected: {
    backgroundColor: '#007FFF',
  },
  chipText: {
    color: '#007FFF',
    fontFamily: 'PlusJakartaSans-SemiBold',
  },
  chipTextSelected: {
    color: '#fff',
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

export default OnBoardingExtraData1;