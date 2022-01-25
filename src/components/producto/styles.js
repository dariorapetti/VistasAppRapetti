import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
    containerTouchable: {
        flex: 1,
        height: height / 4,
        borderRadius: 6,
        margin: 15,
        justifyContent: 'center'
    },
    container: {
        flex: 1,
        borderRadius: 6,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    title: {
        fontWeight: 'bold',
        fontSize: 15
    },
    details: {
        fontSize: 13
    }
});

export default styles;