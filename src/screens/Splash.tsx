import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { View, Text } from "react-native";
import { AuthStackParamList } from "../navigators/AuthNavigator";

type SplashProps = {
    navigation: NativeStackNavigationProp<AuthStackParamList, "Splash">;
    route: RouteProp<AuthStackParamList, "Splash">;
};
export default function Splash(props: SplashProps) {
    React.useEffect(() => {
        setTimeout(() => {
            props.navigation.reset({
                index: 0,
                routes: [{ name: "Login" }],
            });
        }, 2000);
    }, []);
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#528C6E" }}>
            <Text style={{ fontSize: 86, color: "#fff" }}>Bolao</Text>
        </View>
    );
}
