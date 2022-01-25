import React from 'react';
import {
    SafeAreaView, 
    View,
    FlatList
} from 'react-native';
import Categoria from '../../components/categoria/index.js';
import { CATEGORIES } from '../../utils/data/categorias.js';

import styles from './styles.js';

const Categorias = ({ navigation }) => {
    const handleSelectedCategory = (item) => {
        navigation.navigate('Productos', 
        {
            categoryId: item.id, 
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
                    data={CATEGORIES}
                    renderItem={renderCategories}
                    keyExtractor={item => item.id}
                />
            </View>
        </SafeAreaView>
    );
};

export default Categorias;