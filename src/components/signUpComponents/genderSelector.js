import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const GenderSelector = ({ selectedGender, onSelectGender }) => {
    const [generos, setGeneros] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://192.168.1.X:3000/generos") // cambia por tu IP real
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
            <Text style={styles.label}>Select your gender</Text>
            {loading ? (
                <ActivityIndicator color="#007FFF" />
            ) : (
                <View style={styles.pickerWrapper}>
                    <Picker
                        selectedValue={selectedGender}
                        onValueChange={onSelectGender}
                        style={styles.picker}
                        dropdownIconColor="#007FFF"
                    >
                        <Picker.Item label="Select..." value="" enabled={false} />
                        {generos.map((item) => (
                            <Picker.Item key={item.id} label={item.nombre} value={item.nombre} />
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
