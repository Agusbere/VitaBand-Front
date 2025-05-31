import React from 'react';
import { ScrollView, StyleSheet, StatusBar, View, Text, TouchableOpacity } from 'react-native';
import Titulo from '../components/loginComponents/titulo.js';
import InputEmail from '../components/loginComponents/inputEmail.js';
import InputContrasena from '../components/loginComponents/inputContrasena.js';
import Recordarme from '../components/loginComponents/recordarme.js';
import BotonPrincipal from '../components/loginComponents/botonPrincipal.js';
import Divisor from '../components/loginComponents/divisor.js';
import BotonFacebook from '../components/loginComponents/botonFacebook.js';
import BotonGoogle from '../components/loginComponents/botonGoogle.js';

const Login = ({ navigation }) => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <StatusBar style="auto" />
            <Titulo login />
            <InputEmail />
            <InputContrasena label="Password" />
            <Recordarme />
            <BotonPrincipal texto="Sign In" onLogin={() => navigation.navigate('SplashScreen')} />
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