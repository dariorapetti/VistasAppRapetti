/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Categorias from './src/screens/categorias/index';
import Productos from './src/screens/productos/index';
import DetalleProducto from './src/screens/detalleProducto/index';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Categorias" component={Categorias}></Stack.Screen>
            <Stack.Screen name="Productos" component={Productos}></Stack.Screen>
            <Stack.Screen name="DetalleProducto" component={DetalleProducto}></Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
  );
};


export default AppNavigation;
