import { StyleSheet, Dimensions } from "react-native";

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: height / 4,
        borderRadius: 6,
        margin: 15,
      },
      header: {
        flex: 1
      },
      date: {
            fontSize: 20,
      },
        details: {
          flex: 1,
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: 'center',
          justifyContent: 'space-between',
      }
});

export default styles;