import React from 'react';
import SuccessfullAction from '../successfullAction';

const OnBoardingExtraData3 = ({ navigation }) => {
  return (
    <SuccessfullAction
      title="Register successfully completed"
      description="Your profile information has been saved. Now choose how you want to use VitaBand."
      buttonText="Continue"
      showConfetti={true}
      navigation={navigation}
      route={{ params: { onButtonPress: () => navigation.replace('RoleScreen') } }}
    />
  );
};

export default OnBoardingExtraData3;