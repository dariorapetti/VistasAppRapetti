import React from 'react';
import {
    SafeAreaView, 
    Text, 
    View
} from 'react-native';

import styles from './styles.js';

const Productos = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Text>Productos</Text>
            </View>
        </SafeAreaView>
    );
};

export default Productos;