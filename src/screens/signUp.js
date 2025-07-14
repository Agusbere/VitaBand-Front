import React, { useState } from 'react';
import { ScrollView, Alert, StyleSheet, StatusBar, Text, View } from 'react-native';

import InputTelefono from '../components/signUpComponents/inputTelefono.js';
import InputEmail from '../components/loginComponents/inputEmail.js';
import InputContrasena from '../components/loginComponents/inputContrasena.js';
import PasswordStrengthMeter, { isStrongPassword } from '../components/signUpComponents/strongPassword.js';
import BotonPrincipal from '../components/loginComponents/botonPrincipal.js';
import Titulo from '../components/signUpComponents/titulo.js';
import genericFetch, { saveAuthToken } from '../utils/genericFetch';

const SignUp = ({ navigation }) => {
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [loading, setLoading] = useState(false);

    const handleRegister = async () => {
        if (!mail || !password || !confirmPassword || !phone) {
            Alert.alert("Missing data", "Please complete all required fields.");
            return;
        }

        if (password !== confirmPassword) {
            Alert.alert("Error", "Passwords do not match.");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(mail)) {
            Alert.alert("Error", "Please enter a valid email.");
            return;
        }

        if (phone.length !== 8) {
            Alert.alert("Error", "Phone number must be exactly 8 characters.");
            return;
        }

        if (!isStrongPassword(password)) {
            Alert.alert(
                "Weak password", 
                "Your password must be 'Strong' or higher. It must contain:\n• More than 7 characters\n• At least one uppercase letter\n• At least one number\n• At least one special character"
            );
            return;
        }

        setLoading(true);

        try {
            console.log('Intentando registrar usuario:', { mail, phone });

            const response = await genericFetch("/api/auth/register", "POST", {
                mail,
                password,
                phone
            });

            console.log('Respuesta del registro:', response);

            if (response.token) {
                await saveAuthToken(response.token);
                console.log('Token guardado exitosamente');
            }

            Alert.alert(
                "Success!",
                "User registered successfully",
                [
                    {
                        text: "OK",
                        onPress: () => {
                            navigation.navigate('ExtraData', {
                                userId: response.user.id,
                                mail: response.user.mail,
                                token: response.token
                            });
                        }
                    }
                ]
            );

        } catch (err) {
            console.error('Error en registro:', err);

            let errorMessage = "Registration failed. Please try again.";

            if (err?.response?.data?.error) {
                errorMessage = err.response.data.error;
            } else if (err?.response?.status === 409) {
                errorMessage = "Email is already registered. Use another email or sign in.";
            } else if (err?.response?.status === 400) {
                errorMessage = "Invalid data. Please check the fields.";
            } else if (err?.message) {
                errorMessage = err.message;
            }

            Alert.alert("Error", errorMessage);
        } finally {
            setLoading(false);
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <StatusBar style="auto" />
            <Titulo />
            <InputEmail
                value={mail}
                onChangeText={setMail}
                placeholder="jane.smith@example.com"
            />
            <InputTelefono
                value={phone}
                onChangeText={setPhone}
                placeholder="12345678"
            />
            <InputContrasena
                label="Enter your password"
                value={password}
                onChangeText={setPassword}
                placeholder="SecurePass123!"
            />
            <PasswordStrengthMeter password={password} />
            <InputContrasena
                label="Confirm your password"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                placeholder="SecurePass123!"
            />
            <BotonPrincipal
                texto={loading ? "Registering..." : "Sign Up"}
                onLogin={handleRegister}
                loading={loading}
                disabled={loading}
            />
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