import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Categorias from '../screens/categorias/index';
import Productos from '../screens/productos/index';
import DetalleProducto from '../screens/detalleProducto/index';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Categorias'>
            <Stack.Screen name="Categorias" component={Categorias}></Stack.Screen>
            <Stack.Screen name="Productos" component={Productos}></Stack.Screen>
            <Stack.Screen name="DetalleProducto" component={DetalleProducto}></Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
  );
};


export default AppNavigation;