import React from 'react';
import { Alert } from 'react-native';
import OnboardingStep3 from '../../components/onboardingComponents/onboardingStep3';
import genericFetch from '../../utils/genericFetch';

const OnBoardingExtraData2 = ({ navigation }) => {
  const handleContinue = async (picture) => {
    try {
      await genericFetch('/api/users/extra-data-2', 'PUT', { picture });
      navigation.replace('OnBoardingExtraData3');
    } catch (err) {
      Alert.alert('Error', 'No se pudo guardar la foto.');
    }
  };

  return <OnboardingStep3 onContinue={handleContinue} onSkip={() => handleContinue(null)} />;
};

export default OnBoardingExtraData2; 