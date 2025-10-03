import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const OnBoardingExtraData0 = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image
          source={require('../../../assets/images/onBoardingPhoto.png')}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.title}>Before starting</Text>
        <Text style={styles.description}>
          In this short setup we will complete your profile information so you can
          get the best experience using VitaBand.
        </Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.replace('OnBoardingExtraData1')}
        activeOpacity={0.9}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    paddingHorizontal: 24,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 280,
    height: 280,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    color: '#222',
    fontFamily: 'PlusJakartaSans-Bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 15,
    color: '#666',
    fontFamily: 'PlusJakartaSans-Regular',
    textAlign: 'center',
    lineHeight: 22,
    maxWidth: 320,
  },
  button: {
    backgroundColor: '#007FFF',
    borderRadius: 25,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'PlusJakartaSans-Bold',
    fontSize: 16,
  },
});

export default OnBoardingExtraData0;