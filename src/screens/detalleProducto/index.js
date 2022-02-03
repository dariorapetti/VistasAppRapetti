import React from 'react';
import {
    SafeAreaView, 
    Text, 
    View
} from 'react-native';

import styles from './styles.js';
import { useSelector } from 'react-redux';

const DetalleProducto = () => {
    const producto = useSelector(state => state.panes.selected);

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