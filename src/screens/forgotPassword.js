import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ForgotPassword = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Forgot Password screen (coming soon!)</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F7F7F7',
    },
    text: {
        fontSize: 18,
        color: '#333',
    },
});

export default ForgotPassword;
