import React, { useState } from 'react';
import { ScrollView, Alert, StyleSheet, StatusBar, Text, View } from 'react-native';

import InputTelefono from '../components/signUpComponents/inputTelefono.js';
import InputEmail from '../components/loginComponents/inputEmail.js';
import InputContrasena from '../components/loginComponents/inputContrasena.js';
import PasswordStrengthMeter from '../components/signUpComponents/strongPassword.js';
import GenderSelector from '../components/signUpComponents/genderSelector.js';
import BotonPrincipal from '../components/loginComponents/botonPrincipal.js';
import Titulo from '../components/signUpComponents/titulo.js';

const SignUp = ({ navigation }) => {
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [gender, setGender] = useState('');

    const handleRegister = async () => {
        if (!mail || !password || !confirmPassword || !phone || !gender) {
            Alert.alert("Faltan datos", "Completá todos los campos obligatorios.");
            return;
        }

        if (password !== confirmPassword) {
            Alert.alert("Error", "Las contraseñas no coinciden.");
            return;
        }

        try {
            const response = await fetch("https://enhanced-obviously-panther.ngrok-free.app/api/auth/register", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ mail, password, phone, gender }),
            });

            const data = await response.json();

            if (response.ok) {
                Alert.alert("Registrado correctamente");
                navigation.navigate('Login');
            } else {
                Alert.alert("Error", data.error || "No se pudo registrar");
            }
        } catch (err) {
            console.error("ERROR REGISTER:", err);
            Alert.alert("Error en conexión");
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <StatusBar style="auto" />
            <Titulo />
            <InputEmail value={mail} onChangeText={setMail} />
            <InputTelefono value={phone} onChangeText={setPhone} />
            <InputContrasena label="Enter your password" value={password} onChangeText={setPassword} />
            <PasswordStrengthMeter password={password} />
            <InputContrasena label="Confirm your password" value={confirmPassword} onChangeText={setConfirmPassword} />
            <GenderSelector selectedGender={gender} onSelectGender={setGender} />
            <BotonPrincipal texto="Sign Up" onLogin={handleRegister} />
            <Text style={styles.bottomText}>
                Already have an account?{' '}
                <Text
                    style={styles.signInLink}
                    onPress={() => navigation.navigate('Login')}
                >
                    Sign In.
                </Text>
            </Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: "#F7F7F7",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 40,
        paddingHorizontal: 20,
    },
    bottomText: {
        fontSize: 14,
        color: '#222',
        marginTop: 10,
        textAlign: 'center',
        fontFamily: 'PlusJakartaSans-Regular',
    },
    signInLink: {
        color: '#2196F3',
        fontWeight: 'bold',
        fontFamily: 'PlusJakartaSans-Bold',
    },
});

export default SignUp;