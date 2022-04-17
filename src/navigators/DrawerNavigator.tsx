import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList,
} from "@react-navigation/drawer";
import TabNavigator from "./TabNavigator";
import Landing from "../screens/Landing";
import Tournaments from "../screens/Tournaments";
import SelectTournament from "../screens/SelectTournament";
//import Icon from "react-native-vector-icons/FontAwesome";
import { useTournamentContext } from "../contexts/TournamentContext";
import { useUserContext } from "../contexts/UserContext";
import { Alert } from "react-native";

export type DrawerNavigatorParamList = {
    Landing: undefined;
    SelectTournament: undefined;
    SelectedTournament: undefined;
    ManageTournaments: undefined;
    Teams: undefined;
};

const Drawer = createDrawerNavigator<DrawerNavigatorParamList>();
export default function DrawerNavigator(): JSX.Element {
    const { tournamentState, setTournament } = useTournamentContext();

    const { logoutUser } = useUserContext();
    return (
        <Drawer.Navigator
            drawerContent={(props) => (
                <DrawerContentScrollView {...props}>
                    <DrawerItemList {...props} />
                    <DrawerItem
                        labelStyle={{
                            marginLeft: 40,
                            color: "white",
                            fontSize: 16,
                            fontFamily: "RobotoSlab-Regular",
                        }}
                        label="Logout"
                        onPress={() => {
                            Alert.alert(
                                "Log out",
                                "Are you sure you want to log out?",
                                [
                                    {
                                        text: "Cancel",
                                        onPress: () => console.log("Cancel Pressed"),
                                        style: "cancel",
                                    },
                                    {
                                        text: "OK",
                                        onPress: () => {
                                            if (setTournament)
                                                setTournament({ id: null, name: null });
                                            if (logoutUser) logoutUser();
                                        },
                                    },
                                ],
                                { cancelable: false }
                            );
                        }}
                    />
                </DrawerContentScrollView>
            )}
            screenOptions={({ route }) => ({
                drawerStyle: {
                    width: "65%",
                    backgroundColor: "#528C6E",
                    borderTopRightRadius: 30,
                    borderBottomRightRadius: 30,
                    borderRightWidth: 1,
                    borderTopWidth: 1,
                    borderBottomWidth: 1,
                    borderColor: "green",
                },
                drawerContentOptions: {
                    activeTintColor: "#000c00",
                    style: { marginTop: 50, marginHorizontal: -5 },
                    labelStyle: {
                        marginLeft: 5,
                        color: "white",
                        fontSize: 16,
                        fontFamily: "RobotoSlab-Regular",
                    },
                },
            })}
            initialRouteName="Landing"
        >
            <Drawer.Screen
                options={{ title: "Home", swipeEnabled: false }}
                name="Landing"
                component={Landing}
            />
            <Drawer.Screen
                options={{ title: "Select Tournament" }}
                name="SelectTournament"
                component={SelectTournament}
            />

            <Drawer.Screen
                options={{ title: tournamentState.name ?? "None Selected" }}
                name="SelectedTournament"
                component={TabNavigator}
            />

            <Drawer.Screen
                options={{ title: "Tournaments List" }}
                name="ManageTournaments"
                component={Tournaments}
            />
        </Drawer.Navigator>
    );
}
