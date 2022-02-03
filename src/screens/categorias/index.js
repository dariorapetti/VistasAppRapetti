import React from 'react';
import {
    SafeAreaView, 
    View,
    FlatList
} from 'react-native';
import Categoria from '../../components/categoria/index.js';
import { useSelector, useDispatch } from 'react-redux';
import { selectCategoria } from '../../store/actions/categoria.action.js';

import styles from './styles.js';

const Categorias = ({ navigation }) => {
    const dispatch = useDispatch();

    const categorias = useSelector(state => state.categorias.categorias);

    const handleSelectedCategory = (item) => {
        dispatch(selectCategoria(item.id));
        navigation.navigate('Productos', 
        {
            name: item.title,
            color: item.color
        });
    }

    const renderCategories = ({item}) => {
        return (
            <Categoria item={item} onSelected={handleSelectedCategory} />
        )
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <FlatList
                    data={categorias}
                    renderItem={renderCategories}
                    keyExtractor={item => item.id}
                />
            </View>
        </SafeAreaView>
    );
};

export default Categorias;