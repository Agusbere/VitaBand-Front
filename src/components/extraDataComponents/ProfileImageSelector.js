import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ProfileImageSelector = ({ imageUri, onImageSelect, style }) => {
    return (
        <TouchableOpacity 
            style={[styles.container, style]} 
            onPress={onImageSelect}
            activeOpacity={0.8}
        >
            {imageUri ? (
                <Image source={{ uri: imageUri }} style={styles.image} />
            ) : (
                <View style={styles.placeholder}>
                    <Ionicons name="camera" size={40} color="#666" />
                    <Text style={styles.placeholderText}>Upload Image</Text>
                </View>
            )}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 200,
        height: 200,
        borderRadius: 10,
        backgroundColor: '#f0f0f0',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#ddd',
        borderStyle: 'dashed',
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },
    placeholder: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    placeholderText: {
        marginTop: 8,
        color: '#666',
        fontSize: 14,
        fontFamily: 'PlusJakartaSans-Regular',
    },
});

export default ProfileImageSelector;
