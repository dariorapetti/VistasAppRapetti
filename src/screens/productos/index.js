import React from 'react';
import {
    SafeAreaView, 
    Text, 
    View,
    Button
} from 'react-native';

import styles from './styles.js';

const Productos = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Text>Productos</Text>
                <Button title="Ver detalle del producto" onPress={() => navigation.navigate('DetalleProducto')}></Button>
            </View>
        </SafeAreaView>
    );
};

export default Productos;