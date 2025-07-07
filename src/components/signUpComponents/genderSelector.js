import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import genericFetch from '../../utils/genericFetch';

const GenderSelector = ({ selectedGender, onSelectGender }) => {
    const [generos, setGeneros] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchGenders = async () => {
            try {
                const data = await genericFetch('/api/gender', 'GET');
                setGeneros(Array.isArray(data) ? data : (data.generos || []));
            } catch (err) {
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
                <ActivityIndicator color="#007bff" style={{ marginVertical: 8 }} />
            ) : (
                <View style={styles.radioGroup}>
                    {generos.map((item) => (
                        <TouchableOpacity
                            key={item.id}
                            style={styles.radioOption}
                            onPress={() => onSelectGender(item.name)}
                            activeOpacity={0.7}
                        >
                            <View style={[
                                styles.radioCircle,
                                selectedGender === item.name && styles.radioSelected
                            ]}>
                                {selectedGender === item.name && (
                                    <View style={styles.radioInner} />
                                )}
                            </View>
                            <Text style={styles.radioLabel}>{item.name}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '85%',
        marginBottom: 15,
        alignSelf: 'center'
    },
    label: {
        marginBottom: 5,
        color: '#333',
        fontFamily: 'PlusJakartaSans-Regular',
        fontSize: 12,
    },
    radioGroup: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 18,
    },
    radioOption: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 18,
        marginBottom: 8,
    },
    radioCircle: {
        width: 18,
        height: 18,
        borderRadius: 9,
        borderWidth: 2,
        borderColor: '#aaa',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 6
    },
    radioSelected: {
        borderColor: '#007bff',
    },
    radioInner: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#007bff',
    },
    radioLabel: {
        fontSize: 14,
        fontFamily: 'PlusJakartaSans-Regular',
        color: '#333',
    },
});

export default GenderSelector;