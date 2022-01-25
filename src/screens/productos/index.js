import React from 'react';
import {
    SafeAreaView, 
    View,
    FlatList
} from 'react-native';

import styles from './styles.js';
import { PANES } from '../../utils/data/panes';
import Producto from  '../../components/producto/index.js';

const Productos = ({ navigation, route }) => {
    const panes = PANES.filter(pan => pan.categoria === route.params.categoryId );

    const handleSelectedProduct = (item) => {
        navigation.navigate('DetalleProducto', 
        {
            productId: item.id,
            name: item.nombre,
            producto: item
        });
    }

    const renderProducts = ({item}) => {
        return (
            <Producto item={item} onSelected={handleSelectedProduct} />
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <FlatList
                    data={panes}
                    renderItem={renderProducts}
                    keyExtractor={item => item.id}
                />
            </View>
        </SafeAreaView>
    );
};

export default Productos;