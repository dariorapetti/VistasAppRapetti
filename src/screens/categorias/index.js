import React from 'react';
import {
    SafeAreaView, 
    Text, 
    View
} from 'react-native';

import styles from './styles.js';

const Categorias = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Text>Categorias</Text>
            </View>
        </SafeAreaView>
    );
};

export default Categorias;