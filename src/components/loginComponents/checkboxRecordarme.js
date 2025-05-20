import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Checkbox from 'expo-checkbox';

const RecordarmeCheckbox = () => {
    const [recordar, setRecordar] = React.useState(false);

    return (
        <View style={styles.container}>
            <Checkbox value={recordar} onValueChange={setRecordar} color={recordar ? '#007bff' : undefined} />
            <Text style={styles.texto}> Remember For 30 Days</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    texto: {
        marginLeft: 8,
        color: '#333',
    },
});

export default RecordarmeCheckbox;
