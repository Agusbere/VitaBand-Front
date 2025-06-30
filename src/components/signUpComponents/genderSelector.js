import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const GenderSelector = ({ selectedGender, onSelectGender }) => {
    const [generos, setGeneros] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://enhanced-obviously-panther.ngrok-free.app/api/gender")
            .then(res => res.json())
            .then(data => {
                setGeneros(data);
                if (data.length > 0 && !selectedGender) {
                    const defaultGenero = data.find(g => g.name === "Male") || data[0];
                    onSelectGender(defaultGenero.name);
                }
                setLoading(false);
            })
            .catch(err => {
                console.error("Error fetching géneros:", err);
                setLoading(false);
            });
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
                        onValueChange={(itemValue) => onSelectGender(itemValue)}
                        style={styles.picker}
                        dropdownIconColor="#333"
                    >
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
        paddingHorizontal: 10,
        justifyContent: 'center',
        height: 50,
        marginHorizontal: 20,
    },
    picker: {
        height: 50,
        width: '100%',
        color: '#333',
        fontFamily: 'PlusJakartaSans-Regular',
    },
});

export default GenderSelector;
