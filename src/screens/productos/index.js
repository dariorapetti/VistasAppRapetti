import React, { useEffect } from 'react';
import {
    SafeAreaView, 
    View,
    FlatList
} from 'react-native';

import styles from './styles.js';
import { useSelector, useDispatch } from 'react-redux';
import Producto from  '../../components/producto/index.js';
import { filterPan, selectPan } from '../../store/actions/pan.action.js';

const Productos = ({ navigation, route }) => {
    const dispatch = useDispatch();

    const panes = useSelector(state => state.panes.panesFiltrados);
    const categoria = useSelector(state => state.categorias.selected);

    const handleSelectedProduct = (item) => {
        dispatch(selectPan(item.id));
        navigation.navigate('DetalleProducto', 
        {
            name: item.nombre
        });
    }

    const renderProducts = ({item}) => {
        return (
            <Producto item={item} onSelected={handleSelectedProduct} />
        )
    }

    useEffect(() => {
        dispatch(filterPan(categoria.id));
    }, []);

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