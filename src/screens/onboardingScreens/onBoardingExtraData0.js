import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import BotonPrincipal from '../../components/loginComponents/botonPrincipal';

const OnBoardingExtraData0 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={24} color="#333" />
      </TouchableOpacity>

      <Image 
        //source={require('../../assets/images/onboardingPhoto.png')}
        style={styles.image}
        resizeMode="contain"
      />
      
      <Text style={styles.title}>BEFORE STARTING</Text>
      
      <Text style={styles.description}>
        In this section, you'll complete your profile information to get the most out of our platform. 
        We'll ask for your personal details, an optional profile picture, and help you choose your role.
      </Text>

      <BotonPrincipal
        texto="CONTINUE"
        onLogin={() => navigation.navigate('ExtraData1')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    paddingHorizontal: 30,
    paddingTop: 60,
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 1,
    padding: 10,
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 30,
    marginTop: 40,
  },
  title: {
    fontSize: 28,
    fontFamily: 'PlusJakartaSans-Bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    fontFamily: 'PlusJakartaSans-Regular',
    color: '#666',
    textAlign: 'center',
    marginBottom: 40,
    lineHeight: 24,
  },
});

export default OnBoardingExtraData0;
