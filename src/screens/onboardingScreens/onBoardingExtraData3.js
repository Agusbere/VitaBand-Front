import React from 'react';
import OnboardingStep4 from '../../components/onboardingComponents/onboardingStep4';

const OnBoardingExtraData3 = ({ navigation }) => {
  const handleSelectRole = (role) => {
    if (role === 'bander') {
      navigation.replace('BanderHome');
    } else {
      navigation.replace('HosterHome');
    }
  };

  return <OnboardingStep4 onSelectRole={handleSelectRole} />;
};

export default OnBoardingExtraData3; 