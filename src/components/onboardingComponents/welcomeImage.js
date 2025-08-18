import React from 'react';
import { Image, StyleSheet } from 'react-native';

const WelcomeImage = ({ style }) => {
    return (
        <Image 
            source={require('../../assets/images/onboardingPhoto.png')} 
            style={[styles.image, style]}
            resizeMode="contain"
        />
    );
};

const styles = StyleSheet.create({
    image: {
        width: 300,
        height: 300,
    },
});

export default WelcomeImage;
