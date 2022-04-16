import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Text, TouchableOpacity, View } from "react-native";
import { AppStackParamList } from "../navigators/AppNavigator";
import { RouteProp } from "@react-navigation/native";

type HomeProps = {
    navigation: NativeStackNavigationProp<AppStackParamList, "Home">;
    route: RouteProp<AppStackParamList, "Home">;
};
export default function Home(props: HomeProps) {
    return (
        <View>
            <Text>Home</Text>
            <TouchableOpacity
                style={{ padding: 16, borderRadius: 8, backgroundColor: "tomato", marginHorizontal: 40 }}
                onPress={() => props.navigation.navigate("About")}
            >
                <Text style={{ color: "#fff" }}>Navigate to about</Text>
            </TouchableOpacity>
        </View>
    );
}
