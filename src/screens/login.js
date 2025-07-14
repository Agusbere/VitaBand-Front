import React, { useState } from 'react';
import { ScrollView, Alert, StyleSheet, View, Text, TouchableOpacity, StatusBar } from 'react-native';

import Titulo from '../components/loginComponents/titulo.js';
import InputEmail from '../components/loginComponents/inputEmail.js';
import InputContrasena from '../components/loginComponents/inputContrasena.js';
import BotonPrincipal from '../components/loginComponents/botonPrincipal.js';
import Divisor from '../components/loginComponents/divisor.js';
import BotonFacebook from '../components/loginComponents/botonFacebook.js';
import BotonGoogle from '../components/loginComponents/botonGoogle.js';
import genericFetch, { saveAuthToken } from '../utils/genericFetch.js';
import { isStrongPassword } from '../components/signUpComponents/strongPassword.js';

const Login = ({ navigation }) => {
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = async () => {
        if (!mail || !password) {
            Alert.alert("Missing data", "Please complete all fields.");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(mail)) {
            Alert.alert("Error", "Please enter a valid email.");
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
            console.log('Intentando login:', { mail });

            const response = await genericFetch("/api/auth/login", "POST", {
                mail,
                password
            });

            console.log('Login exitoso:', response);

            if (response.token) {
                await saveAuthToken(response.token);
                console.log('Token guardado exitosamente');
            }

            const userName = response.user.name
                ? `${response.user.name} ${response.user.surname || ''}`.trim()
                : response.user.mail;

            Alert.alert(
                "Welcome!",
                `Hello ${userName}`,
                [
                    {
                        text: "OK",
                        onPress: () => {
                            navigation.reset({
                                index: 0,
                                routes: [{ name: 'SplashScreen' }],
                            });
                        }
                    }
                ]
            );

        } catch (err) {
            console.error('Error en login:', err);

            let errorMessage = "Login error. Please try again.";

            if (err?.response?.data?.error) {
                errorMessage = err.response.data.error;
            } else if (err?.response?.status === 401) {
                errorMessage = "Invalid credentials. Please check your email and password.";
            } else if (err?.response?.status === 400) {
                errorMessage = "Invalid data. Please check the fields.";
            } else if (err?.response?.status === 500) {
                errorMessage = "Server error. Please try again later.";
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
            <Titulo login />
            <InputEmail
                value={mail}
                onChangeText={setMail}
                placeholder="john.doe@example.com"
                autoCapitalize="none"
                keyboardType="email-address"
            />
            <InputContrasena
                value={password}
                onChangeText={setPassword}
                label="Password"
                placeholder="MyPassword123!"
                secureTextEntry={true}
            />
            <BotonPrincipal
                texto={loading ? "Signing In..." : "Sign In"}
                onLogin={handleLogin}
                loading={loading}
                disabled={loading}
            />
            <View style={styles.linksContainer}>
                <Text style={styles.textoSecundario}>
                    Don't have an account?{' '}
                    <Text
                        style={styles.link}
                        onPress={() => !loading && navigation.navigate('SignUp')}
                    >
                        Sign Up
                    </Text>
                </Text>
                <TouchableOpacity
                    onPress={() => !loading && navigation.navigate('ForgotPassword')}
                    disabled={loading}
                >
                    <Text style={[styles.link, loading && styles.linkDisabled]}>
                        Forgot Password
                    </Text>
                </TouchableOpacity>
            </View>
            <Divisor />
            <BotonFacebook disabled={loading} />
            <BotonGoogle disabled={loading} />
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
    linksContainer: {
        marginTop: 10,
        alignItems: 'center',
        width: '100%',
    },
    textoSecundario: {
        color: '#222',
        fontSize: 14,
        fontFamily: 'PlusJakartaSans-Regular',
    },
    link: {
        color: '#2196F3',
        fontWeight: 'bold',
        fontFamily: 'PlusJakartaSans-Bold',
    },
    linkDisabled: {
        opacity: 0.5,
    },
});

export default Login;