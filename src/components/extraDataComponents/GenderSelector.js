import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const GenderSelector = ({ selectedGender, onGenderSelect }) => {
    const genders = [
        { id: 1, label: 'Male', icon: 'male' },
        { id: 2, label: 'Female', icon: 'female' },
        { id: 3, label: 'Other', icon: 'person' }
    ];

    return (
        <View style={styles.container}>
            <View style={styles.optionsContainer}>
                {genders.map((gender) => (
                    <TouchableOpacity
                        key={gender.id}
                        style={[
                            styles.option,
                            selectedGender === gender.id && styles.selectedOption
                        ]}
                        onPress={() => onGenderSelect(gender.id)}
                    >
                        <Ionicons
                            name={gender.icon}
                            size={24}
                            color={selectedGender === gender.id ? '#fff' : '#666'}
                        />
                        <Text style={[
                            styles.optionText,
                            selectedGender === gender.id && styles.selectedOptionText
                        ]}>
                            {gender.label}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    optionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    option: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        padding: 15,
        marginHorizontal: 5,
        borderRadius: 10,
        backgroundColor: '#f0f0f0',
        borderWidth: 1,
        borderColor: '#ddd',
    },
    selectedOption: {
        backgroundColor: '#3B82F6',
        borderColor: '#3B82F6',
    },
    optionText: {
        marginTop: 5,
        fontSize: 12,
        color: '#666',
        fontFamily: 'PlusJakartaSans-Regular',
    },
    selectedOptionText: {
        color: '#fff',
        fontFamily: 'PlusJakartaSans-Bold',
    },
});

export default GenderSelector;
