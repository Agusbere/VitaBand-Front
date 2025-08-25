import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ExtraData0 from '../screens/extraData0';
import ExtraData1 from '../screens/extraData1';
import ExtraData2 from '../screens/extraData2';
import ExtraData3 from '../screens/extraData3';
import ExtraData4 from '../screens/extraData4';
import RoleScreen from '../screens/roleScreen';

const Stack = createStackNavigator();

const ExtraDataNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: { backgroundColor: '#F7F7F7' },
            }}
        >
            <Stack.Screen name="ExtraData0" component={ExtraData0} />
            <Stack.Screen name="ExtraData1" component={ExtraData1} />
            <Stack.Screen name="ExtraData2" component={ExtraData2} />
            <Stack.Screen name="ExtraData3" component={ExtraData3} />
            <Stack.Screen name="ExtraData4" component={ExtraData4} />
            <Stack.Screen name="RoleScreen" component={RoleScreen} />
        </Stack.Navigator>
    );
};

export default ExtraDataNavigator;
