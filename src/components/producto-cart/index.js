import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './styles.js';

const ProductoCart = ({item, onDelete}) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.name}>{item.nombre}</Text>
            </View>
            <View style={styles.details}>
                <Text>Cantidad: {item.cantidad}</Text>
                <Text>$ {item.precio}</Text>
                <TouchableOpacity onPress={() => onDelete(item.id)}>
                    <Ionicons name="trash-outline" size={20} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ProductoCart;