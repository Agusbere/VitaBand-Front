import React from "react";
import { View, StatusBar, StyleSheet, ScrollView } from "react-native";

import Titulo from "../components/loginComponents/titulo.js";
import InputEmail from "../components/loginComponents/inputEmail.js";
import InputContrasena from "../components/loginComponents/inputContrasena.js";
import Recordarme from "../components/loginComponents/recordarme.js";
import BotonLogin from "../components/loginComponents/botonPrincipal.js";
import AccionesRapidas from "../components/loginComponents/linksInferiores.js";
import Separador from "../components/loginComponents/divisor.js";
import BotonFacebook from "../components/loginComponents/botonFacebook.js";
import BotonGoogle from "../components/loginComponents/botonGoogle.js";

const Login = ({ navigation }) => {
  const handleLogin = () => {
    navigation.navigate('SplashScreen');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar style="auto" />
      <Titulo />
      <InputEmail />
      <InputContrasena />
      <Recordarme />
      <BotonLogin onLogin={handleLogin} />
      <AccionesRapidas />
      <Separador />
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
  },
});

export default Login;
