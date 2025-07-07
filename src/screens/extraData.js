import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Alert, TouchableOpacity } from 'react-native';

const ExtraData = ({ route, navigation }) => {
    const { userId, mail } = route.params;
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [gender, setGender] = useState('');
    const [birthdate, setBirthdate] = useState('');

    const handleSave = async () => {
        if (!nombre || !apellido || !gender) {
            Alert.alert("Faltan datos obligatorios");
            return;
        }

        try {
            // Simula request al backend (POST/PATCH)
            // const response = await fetch(`https://enhanced-obviously-panther.ngrok-free.app/api/users/${userId}`, {
            //     method: 'PATCH',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify({ nombre, apellido, gender, birthdate })
            // });
            // const data = await response.json();
            // if (response.ok) {
            //     Alert.alert("Datos guardados correctamente");
            //     navigation.navigate('SplashScreen');
            // } else {
            //     Alert.alert("Error", data.error || "No se pudo guardar");
            // }

            // Simulación de éxito
            setTimeout(() => {
                Alert.alert("Datos guardados correctamente");
                navigation.navigate('SplashScreen');
            }, 1000);
        } catch (err) {
            Alert.alert("Error en conexión");
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Datos adicionales</Text>
            <TextInput style={styles.input} placeholder="Nombre" value={nombre} onChangeText={setNombre} />
            <TextInput style={styles.input} placeholder="Apellido" value={apellido} onChangeText={setApellido} />
            <TextInput style={styles.input} placeholder="Género" value={gender} onChangeText={setGender} />
            <TextInput style={styles.input} placeholder="Fecha de nacimiento (YYYY-MM-DD)" value={birthdate} onChangeText={setBirthdate} />
            <TouchableOpacity style={styles.button} onPress={handleSave}>
                <Text style={styles.buttonText}>Guardar</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 24, backgroundColor: '#F7F7F7', justifyContent: 'center' },
    title: { fontSize: 20, marginBottom: 18, textAlign: 'center' },
    input: { backgroundColor: '#fff', borderRadius: 8, padding: 12, marginBottom: 12, borderWidth: 1, borderColor: '#ccc' },
    button: { backgroundColor: '#2196F3', borderRadius: 8, padding: 14, alignItems: 'center' },
    buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 }
});

export default ExtraData;