import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

import styles from './styles.js';

const Producto = ({item, onSelected}) => {
    return (
        <TouchableOpacity
            style={[styles.containerTouchable, {backgroundColor: item.color}]}
            onPress={() => onSelected(item)}>
            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>{item.nombre}</Text>
                </View>
                <View>
                    <Text style={styles.details}>$ {item.precio}</Text>
                    <Text style={styles.details}>{item.peso}</Text>
                </View>
            </View>
        </TouchableOpacity>
  );
};

export default Producto;
