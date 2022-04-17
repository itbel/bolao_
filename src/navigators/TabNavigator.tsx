import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, View, Platform } from "react-native";
import { Assets } from "../../assets";
import Guess from "../screens/Guess";
import Rounds from "../screens/Rounds";
import Rankings from "../screens/Rankings";

export type TabNavigatorParamList = {
    Guess: undefined;
    Rules: undefined;
    Rounds: undefined;
    Wins: undefined;
    Rankings: undefined;
};

const Tab = createBottomTabNavigator<TabNavigatorParamList>();

export default function TabNavigator(): JSX.Element {
    return (
        <View style={{ backgroundColor: "white", flex: 1 }}>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarStyle: {
                        backgroundColor: "white",
                        height: Platform.OS === "ios" ? 110 : 80,
                        borderTopRightRadius: 30,
                        borderRightColor: "lightgrey",
                        borderLeftColor: "lightgrey",
                        borderTopLeftRadius: 30,
                        borderTopWidth: 1,
                        borderWidth: 0.5,
                        borderTopColor: "lightgrey",
                    },
                    tabBarIcon: ({ focused, color, size }) => {
                        if (route.name === "Guess")
                            return (
                                <Image
                                    style={focused ? {} : { opacity: 0.3 }}
                                    source={Assets.media.guess}
                                ></Image>
                            );
                        else if (route.name === "Rules")
                            return (
                                <Image
                                    style={focused ? {} : { opacity: 0.3 }}
                                    source={Assets.media.rules}
                                ></Image>
                            );
                        else if (route.name === "Rounds")
                            return (
                                <Image
                                    style={focused ? {} : { opacity: 0.3 }}
                                    source={Assets.media.rounds}
                                ></Image>
                            );
                        else if (route.name === "Wins")
                            return (
                                <Image
                                    style={focused ? {} : { opacity: 0.3 }}
                                    source={Assets.media.wins}
                                ></Image>
                            );
                        else if (route.name === "Rankings")
                            return (
                                <Image
                                    style={focused ? {} : { opacity: 0.3 }}
                                    source={Assets.media.rank}
                                ></Image>
                            );
                    },
                })}
                initialRouteName="Rounds"
            >
                <Tab.Screen options={{ title: "Guess" }} name="Guess" component={Guess} />
                <Tab.Screen
                    options={{ title: "Rounds" }}
                    name="Rounds"
                    component={Rounds}
                />
                <Tab.Screen
                    options={{ title: "Ranking" }}
                    name="Rankings"
                    component={Rankings}
                />
            </Tab.Navigator>
        </View>
    );
}
