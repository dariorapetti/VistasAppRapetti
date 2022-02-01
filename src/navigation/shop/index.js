import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Categorias from '../../screens/categorias/index';
import Productos from '../../screens/productos/index';
import DetalleProducto from '../../screens/detalleProducto/index';
import { Platform } from 'react-native';
import { COLORS } from '../../utils/constants/color';

const Stack = createNativeStackNavigator();

const ShopStackNavigation = () => {
  return (   
        <Stack.Navigator 
            initialRouteName="Categorias"
            screenOptions={{
                headerStyle:{
                    backgroundColor: Platform.OS === 'android'  ? COLORS.primary : ''
                },
                headerTintColor: Platform.OS === 'android'  ? 'white' : COLORS.primary,
                headerTitleStyle:{
                    fontWeight: 'bold'
                }
            }}>
            <Stack.Screen name="Categorias" component={Categorias} />
            <Stack.Screen 
                name="Productos" 
                component={Productos} 
                options={({ route }) => ({
                    title: route.params.name,
                    headerStyle: {
                        backgroundColor: route.params.color
                    }
                })}
            />
            <Stack.Screen 
                name="DetalleProducto" 
                component={DetalleProducto}
                options={({ route }) => ({
                    title: route.params.name
                })} />
        </Stack.Navigator>
  );
};


export default ShopStackNavigation;