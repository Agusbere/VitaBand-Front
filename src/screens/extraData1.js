import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';

import InputEmail from '../components/loginComponents/inputEmail';
import GenderSelector from '../components/extraDataComponents/GenderSelector';
import BotonPrincipal from '../components/loginComponents/botonPrincipal';
import genericFetch from '../utils/genericFetch';

const ExtraData1 = ({ route, navigation }) => {
    const { userId, mail } = route.params;
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [birthdate, setBirthdate] = useState(new Date());
    const [id_gender, setIdGender] = useState(null);
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [loading, setLoading] = useState(false);

    const isFormValid = name && surname && id_gender;

    const handleDateChange = (event, selectedDate) => {
        setShowDatePicker(false);
        if (selectedDate) {
            setBirthdate(selectedDate);
        }
    };

    const formatDate = (date) => {
        return date.toISOString().split('T')[0];
    };

    const handleContinue = async () => {
        if (!isFormValid) {
            Alert.alert("Missing data", "Please complete all required fields.");
            return;
        }

        setLoading(true);

        try {
            const response = await genericFetch('/api/users/extra-data-1', 'PUT', {
                name,
                surname,
                birthdate: formatDate(birthdate),
                id_gender
            });

            if (response) {
                navigation.navigate('ExtraData2', { userId, mail });
            }
        } catch (error) {
            Alert.alert("Error", "Failed to save data. Please try again.");
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

            <Text style={styles.title}>Personal Information</Text>
            <Text style={styles.subtitle}>Let's get to know you better</Text>

            <View style={styles.formContainer}>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>First Name</Text>
                    <InputEmail
                        value={name}
                        onChangeText={setName}
                        placeholder="Enter your first name"
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Last Name</Text>
                    <InputEmail
                        value={surname}
                        onChangeText={setSurname}
                        placeholder="Enter your last name"
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Gender</Text>
                    <GenderSelector
                        selectedGender={id_gender}
                        onGenderSelect={setIdGender}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Date of Birth</Text>
                    <TouchableOpacity 
                        style={styles.dateButton}
                        onPress={() => setShowDatePicker(true)}
                    >
                        <Text style={styles.dateText}>{formatDate(birthdate)}</Text>
                        <Ionicons name="calendar" size={20} color="#666" />
                    </TouchableOpacity>
                </View>

                {showDatePicker && (
                    <DateTimePicker
                        value={birthdate}
                        mode="date"
                        display="default"
                        onChange={handleDateChange}
                        maximumDate={new Date()}
                    />
                )}
            </View>

            <BotonPrincipal
                texto={loading ? "Saving..." : "CONTINUE"}
                onLogin={handleContinue}
                loading={loading}
                disabled={!isFormValid || loading}
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
    title: {
        fontSize: 28,
        fontFamily: 'PlusJakartaSans-Bold',
        color: '#333',
        marginTop: 40,
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        fontFamily: 'PlusJakartaSans-Regular',
        color: '#666',
        marginBottom: 30,
    },
    formContainer: {
        marginBottom: 30,
    },
    inputContainer: {
        marginBottom: 20,
    },
    label: {
        fontSize: 14,
        color: '#333',
        fontFamily: 'PlusJakartaSans-Regular',
        marginBottom: 5,
        marginLeft: 10,
    },
    dateButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        borderRadius: 25,
        paddingHorizontal: 15,
        paddingVertical: 12,
        borderWidth: 1,
        borderColor: '#ddd',
        width: '85%',
        alignSelf: 'center',
    },
    dateText: {
        fontFamily: 'PlusJakartaSans-Regular',
        color: '#333',
    },
});

export default ExtraData1;
