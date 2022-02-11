import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabsNavigator from './bottom-tab';
import AuthStackNavigation from './auth';

const AppNavigation = () => {
    const [user, setUser] = useState(null);
  return (
    <NavigationContainer>
        { user ? <BottomTabsNavigator /> : <AuthStackNavigation />}        
    </NavigationContainer>
  );
};


export default AppNavigation;