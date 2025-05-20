import React, { useState } from 'react';
import { View, TextInput, Image, TouchableOpacity, StyleSheet, Text } from 'react-native';
import passIcon from '../../../assets/images/contrasena.png';
import verContra from '../../../assets/images/verContra.png';
import ocultarContra from '../../../assets/images/ocultarContra.png';

const InputContrasena = () => {
    const [verPassword, setVerPassword] = useState(false);

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Password</Text>
            <View style={styles.inputWrapper}>
                <Image source={passIcon} style={styles.icono} />
                <TextInput
                    style={styles.input}
                    secureTextEntry={!verPassword}
                    placeholder="Enter your password"
                />
                <TouchableOpacity onPress={() => setVerPassword(!verPassword)}>
                    <Image source={verPassword ? ocultarContra : verContra} style={styles.icono} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '85%',
        marginBottom: 10,
    },
    label: {
        marginBottom: 5,
        color: '#333',
    },
    inputWrapper: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 25,
        paddingHorizontal: 15,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ddd',
    },
    icono: {
        width: 20,
        height: 20,
    },
    input: {
        flex: 1,
        height: 40,
        marginHorizontal: 10,
    },
});

export default InputContrasena;
