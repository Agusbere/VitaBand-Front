import React from 'react';
import { ScrollView, StyleSheet, StatusBar, View } from 'react-native';
import Titulo from '../components/loginComponents/titulo.js';
import InputUsername from '../components/signUpComponents/inputUsername.js';
import InputTelefono from '../components/signUpComponents/inputTelefono.js';
import InputEmail from '../components/loginComponents/inputEmail.js';
import InputContrasena from '../components/loginComponents/inputContrasena.js';
import Recordarme from '../components/loginComponents/recordarme.js';
import BotonPrincipal from '../components/loginComponents/botonPrincipal.js';

const SignUp = ({ navigation }) => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <StatusBar style="auto" />
            <Titulo />
            <InputUsername />
            <InputTelefono />
            <InputEmail />
            <InputContrasena label="Password" />
            <InputContrasena label="Confirm Password" />
            <Recordarme />
            <BotonPrincipal onLogin={() => navigation.navigate('SplashScreen')} />
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
    },
});

export default SignUp;
