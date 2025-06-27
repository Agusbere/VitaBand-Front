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
                        onValueChange={onSelectGender}
                        style={styles.picker}
                        dropdownIconColor="#333"
                    >
                        <Picker.Item label="Male" value="" enabled={false} />
                        {generos.map((item) => (
                            <Picker.Item key={item.id} label={item.nombre} value={item.id} />
                        ))}
                    </Picker>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '85%',
        marginBottom: 15,
    },
    label: {
        marginBottom: 5,
        color: '#333',
        fontFamily: 'PlusJakartaSans-Regular',
        fontSize: 12,
    },
    pickerWrapper: {
        backgroundColor: '#fff',
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#ddd',
        paddingHorizontal: 10,
        justifyContent: 'center',
    },
    picker: {
        height: 44,
        color: '#333',
        fontFamily: 'PlusJakartaSans-Regular',
    },
});

export default GenderSelector;
