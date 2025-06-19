import React, { useState } from 'react';
import { ScrollView, StyleSheet, StatusBar, View, Text } from 'react-native';

import Titulo from '../components/signUpComponents/titulo.js';
import InputUsername from '../components/signUpComponents/inputUsername.js';
import InputTelefono from '../components/signUpComponents/inputTelefono.js';
import InputEmail from '../components/loginComponents/inputEmail.js';
import InputContrasena from '../components/loginComponents/inputContrasena.js';
import PasswordStrengthMeter from '../components/signUpComponents/strongPassword.js';
import GenderSelector from '../components/signUpComponents/genderSelector.js';
import BotonPrincipal from '../components/loginComponents/botonPrincipal.js';

const SignUp = ({ navigation }) => {
    const [password, setPassword] = useState('');
    const [gender, setGender] = useState('');

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <StatusBar style="auto" />
            <Titulo />
            <InputUsername />
            <InputTelefono />
            <InputEmail />
            <InputContrasena
                label="Password"
                value={password}
                onChangeText={setPassword}
            />
            <PasswordStrengthMeter password={password} />
            <InputContrasena label="Confirm Password" />
            <GenderSelector selectedGender={gender} onSelectGender={setGender} />
            <BotonPrincipal texto="Sign Up" onLogin={() => navigation.navigate('SplashScreen')} />
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
