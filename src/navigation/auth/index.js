import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Platform } from 'react-native';
import Auth from '../../screens/auth';

const Stack = createNativeStackNavigator();

const AuthStackNavigation = () => {
  return (   
        <Stack.Navigator 
            initialRouteName="Auth"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="Auth" component={Auth} />
        </Stack.Navigator>
  );
};


export default AuthStackNavigation;