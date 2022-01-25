import React from 'react';
import {
    SafeAreaView, 
    Text, 
    View,
    Button
} from 'react-native';

import styles from './styles.js';

const Categorias = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Text>Categorias</Text>
                <Button title="Navegar a productos" onPress={() => navigation.navigate('Productos')}></Button>
            </View>
        </SafeAreaView>
    );
};

export default Categorias;