import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import QRCodeScannerComponent from '../Screens/QRCodeScanner';
import ResultScreen from '../Screens/ResultScreen';
import ScreenName from './ScreenName';

export type RootStackParamList = {
    Home: undefined;
    Scanner: undefined;
    Result: { number: string };
  };

const Stack = createStackNavigator<RootStackParamList>();

const Routes: React.FC = () => {
    return (

        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name={ScreenName.Home} component={HomeScreen} />
            <Stack.Screen name={ScreenName.Scanner} component={QRCodeScannerComponent} />
            <Stack.Screen name={ScreenName.Result} component={ResultScreen} />
        </Stack.Navigator>
    );
};

export default Routes;
