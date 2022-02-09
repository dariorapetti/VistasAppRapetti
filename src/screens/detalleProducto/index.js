import React from 'react';
import {
    SafeAreaView, 
    Text, 
    View,
    Button
} from 'react-native';

import styles from './styles.js';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../../store/actions/cart.action.js';

const DetalleProducto = () => {
    const dispatch = useDispatch();
    const producto = useSelector(state => state.panes.selected);
    const handleAddItemCart = () => dispatch(addItem(producto));

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Text>{producto.descripcion}</Text>
                <Text>{producto.peso}</Text>
                <Text>$ {producto.precio}</Text>
                <Button title="Agregar al carrito" onPress={() => handleAddItemCart()} />
            </View>
        </SafeAreaView>
    );
};

export default DetalleProducto;