import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
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
    header: {
        flex: 1
    },
    title: {
        fontWeight: 'bold',
        fontSize: 15
    },
    details: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
});

export default styles;