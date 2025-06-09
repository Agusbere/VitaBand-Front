import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const GoBackButton = ({ onPress }) => (
    <TouchableOpacity onPress={onPress}>
        <View style={styles.closeCircle}>
            <Ionicons name="close" size={18} color="#007FFF" />
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    closeCircle: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: '#E6F0FA',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default GoBackButton;
