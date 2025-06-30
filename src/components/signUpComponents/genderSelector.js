import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';

const GenderSelector = ({ selectedGender, onSelectGender }) => {
    const [generos, setGeneros] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchGenders = async () => {
            try {
                const response = await fetch("https://enhanced-obviously-panther.ngrok-free.app/api/gender", {
                    method: "GET",
                    headers: {
                        "content-type": "application/json",
                        "ngrok-skip-browser-warning": "*",
                    }
                });
                const data = await response.json();
                setGeneros(data);
            } catch (err) {
                console.error("Error fetching géneros:", err);
                setGeneros([]);
            } finally {
                setLoading(false);
            }
        };

        fetchGenders();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Gender</Text>
            {loading ? (
                <ActivityIndicator color="#007FFF" />
            ) : (
                <View style={styles.pickerWrapper}>
                    <Picker
                        selectedValue={selectedGender}
                        onValueChange={onSelectGender}
                        style={styles.picker}
                        mode="dropdown"
                        dropdownIconColor="#000"
                    >
                        <Picker.Item label="Seleccionar género..." value="" enabled={false} />
                        {generos.map((item) => (
                            <Picker.Item key={item.id} label={item.name} value={item.name} />
                        ))}
                    </Picker>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginBottom: 15,
    },
    label: {
        marginBottom: 5,
        color: '#333',
        fontFamily: 'PlusJakartaSans-Regular',
        fontSize: 12,
        paddingLeft: 12,
    },
    pickerWrapper: {
        backgroundColor: '#fff',
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#ddd',
        paddingHorizontal: Platform.OS === 'android' ? 10 : 0,
        marginHorizontal: 10,
        justifyContent: 'center',
        height: 48,
    },
    picker: {
        height: 48,
        width: '100%',
        color: '#333',
    },
});

export default GenderSelector;