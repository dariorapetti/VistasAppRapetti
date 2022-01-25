import React from 'react';
import {
    SafeAreaView, 
    Text, 
    View
} from 'react-native';

import styles from './styles.js';

const DetalleProducto = ({ route }) => {
    const { producto } = route.params;
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Text>{producto.descripcion}</Text>
                <Text>{producto.peso}</Text>
                <Text>$ {producto.precio}</Text>
            </View>
        </SafeAreaView>
    );
};

export default DetalleProducto;