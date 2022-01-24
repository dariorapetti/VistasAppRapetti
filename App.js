/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
    SafeAreaView, 
    StyleSheet,
    Text, 
    View
} from 'react-native';

const App = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Text>Prueba</Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default App;
