import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Ionicons } from '@expo/vector-icons';

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
            <View style={styles.inputWrapper}>
                <Ionicons name="male-female-outline" size={18} color="#aaa" style={{ marginRight: 8 }} />
                <View style={styles.pickerContainer}>
                    <Picker
                        selectedValue={selectedGender}
                        onValueChange={onSelectGender}
                        style={styles.picker}
                        mode="dropdown"
                        dropdownIconColor="#aaa"
                        itemStyle={styles.pickerItem}
                    >
                        <Picker.Item
                            label="Enter your gender"
                            value=""
                            enabled={false}
                            color="#aaa"
                            style={styles.placeholder}
                        />
                        {generos.map((item) => (
                            <Picker.Item
                                key={item.id}
                                label={item.name}
                                value={item.name}
                                style={styles.pickerItem}
                            />
                        ))}
                    </Picker>
                </View>
            </View>
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
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 25,
        paddingHorizontal: 15,
        borderWidth: 1,
        borderColor: '#ddd',
        height: 48,
    },
    pickerContainer: {
        flex: 1,
        justifyContent: 'center',
        height: 48,
        marginLeft: -6, // tira el texto más a la izquierda
    },
    picker: {
        flex: 1,
        width: '100%',
        color: '#333',
        fontFamily: 'PlusJakartaSans-Regular',
        fontSize: 14, // más chico
        height: Platform.OS === 'android' ? 48 : undefined,
        paddingLeft: 0,
        marginLeft: Platform.OS === 'android' ? -8 : 0, // Android: achica el margen izquierdo aún más
    },
    pickerItem: {
        fontFamily: 'PlusJakartaSans-Regular',
        color: '#333',
        fontSize: 14,
    },
    placeholder: {
        fontFamily: 'PlusJakartaSans-Regular',
        color: '#aaa',
        fontSize: 14,
    },
});

export default GenderSelector;