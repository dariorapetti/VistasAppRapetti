import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    containerForm: {
        flex: 1
    },
    label: {
        fontSize: 12,
        marginBottom: 5,
        fontWeight: "bold"
    },
    input: {
        borderBottomColor: '#CCC',
        borderBottomWidth: 1,
        color: '#333',
        fontSize: 16,
        marginBottom: 15
    },
    error: {
        fontSize: 12,
        marginBottom: 5,
        fontWeight: "bold",
        color: 'red'
    }
});


export default styles;