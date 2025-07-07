import React, { useState } from 'react';
import { ScrollView, Alert, StyleSheet, View, Text, TouchableOpacity, StatusBar } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Titulo from '../components/loginComponents/titulo.js';
import InputEmail from '../components/loginComponents/inputEmail.js';
import InputContrasena from '../components/loginComponents/inputContrasena.js';
import BotonPrincipal from '../components/loginComponents/botonPrincipal.js';
import Divisor from '../components/loginComponents/divisor.js';
import BotonFacebook from '../components/loginComponents/botonFacebook.js';
import BotonGoogle from '../components/loginComponents/botonGoogle.js';
import genericFetch from '../utils/genericFetch.js';

const Login = ({ navigation }) => {
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        if (!mail || !password) {
            Alert.alert("Faltan datos", "Completá todos los campos.");
            return;
        }

        try {
            const data = await genericFetch("/api/auth/login", "POST", { mail, password });
            await AsyncStorage.setItem('token', data.token);
            Alert.alert("Bienvenido");
            navigation.navigate('SplashScreen');
        } catch (err) {
            Alert.alert("Error", err?.response?.data?.error || err.message || "Credenciales incorrectas");
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <StatusBar style="auto" />
            <Titulo login />
            <InputEmail value={mail} onChangeText={setMail} />
            <InputContrasena value={password} onChangeText={setPassword} label="Password" />
            <BotonPrincipal texto="Sign In" onLogin={handleLogin} />
            <View style={styles.linksContainer}>
                <Text style={styles.textoSecundario}>
                    Don’t have an account?{' '}
                    <Text style={styles.link} onPress={() => navigation.navigate('SignUp')}>
                        Sign Up
                    </Text>
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
                    <Text style={styles.link}>Forgot Password</Text>
                </TouchableOpacity>
            </View>
            <Divisor />
            <BotonFacebook />
            <BotonGoogle />
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
});

export default Login;