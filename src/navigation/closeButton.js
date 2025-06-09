import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';

const CloseButton = ({ children }) => (
    <View style={styles.absoluteCloseButton}>
        {children}
    </View>
);

const styles = StyleSheet.create({
    absoluteCloseButton: {
        position: 'absolute',
        top: Platform.OS === 'ios' ? 50 : 30,
        left: 18,
        zIndex: 10,
    },
});

export default CloseButton;
