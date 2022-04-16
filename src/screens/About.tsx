import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Text, View, TouchableOpacity } from "react-native";
import { AppStackParamList } from "../navigators/AppNavigator";
type AboutProps = {
    navigation: NativeStackNavigationProp<AppStackParamList, "About">;
    route: RouteProp<AppStackParamList, "About">;
};
export default function About(props: AboutProps) {
    return (
        <View>
            <Text>About</Text>
            <TouchableOpacity
                style={{ padding: 16, borderRadius: 8, backgroundColor: "tomato", marginHorizontal: 40 }}
                onPress={() => props.navigation.navigate("Home")}
            >
                <Text style={{ color: "#fff" }}>Navigate to Home</Text>
            </TouchableOpacity>
        </View>
    );
}
