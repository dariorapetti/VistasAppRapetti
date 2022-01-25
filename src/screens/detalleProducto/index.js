import React from 'react';
import {
    SafeAreaView, 
    Text, 
    View
} from 'react-native';

import styles from './styles.js';

const DetalleProducto = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Text>Detalle Producto</Text>
            </View>
        </SafeAreaView>
    );
};

export default DetalleProducto;