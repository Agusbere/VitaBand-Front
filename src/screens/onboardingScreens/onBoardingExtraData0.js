import React from 'react';
import OnboardingStep1 from '../../components/onboardingComponents/onboardingStep1';

const OnBoardingExtraData0 = ({ navigation }) => {
  return <OnboardingStep1 onNext={() => navigation.replace('OnBoardingExtraData1')} />;
};

export default OnBoardingExtraData0; 