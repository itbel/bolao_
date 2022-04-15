import { StyleSheet, Text, View } from "react-native";

export default function App() {
    let a;
    return (
        <View style={styles.container}>
            <Text>Bolao</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
