import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import OnboardingStep2 from '../../components/onboardingComponents/onboardingStep2';
import genericFetch from '../../utils/genericFetch';

const OnBoardingExtraData1 = ({ navigation }) => {
  const [genders, setGenders] = useState([]);

  useEffect(() => {
    genericFetch('/api/users/genders')
      .then(setGenders)
      .catch(() => setGenders([]));
  }, []);

  const handleContinue = async (data) => {
    try {
      await genericFetch('/api/users/extra-data-1', 'PUT', data);
      navigation.replace('OnBoardingExtraData2');
    } catch (err) {
      Alert.alert('Error', 'No se pudieron guardar los datos.');
    }
  };

  return <OnboardingStep2 onContinue={handleContinue} genders={genders} />;
};

export default OnBoardingExtraData1; 