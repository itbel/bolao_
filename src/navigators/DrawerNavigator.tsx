import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import TabNavigator from "./TabNavigator";
import Landing from "../screens/Landing/Landing";
import Tournaments from "../screens/Tournaments/Tournaments";
import SelectTournament from "../screens/SelectTournament/SelectTournament";
import { useTournamentContext } from "../contexts/TournamentContext";
import { useUserContext } from "../contexts/UserContext";
import { Alert, View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { ReactNode } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ManageTabNavigator from "./ManageTabNavigator";

export type DrawerNavigatorParamList = {
  DrawerScreens: undefined;
};

export type DrawerNavigatorScreenList = {
  Landing: undefined;
  SelectTournament: undefined;
  SelectedTournament: undefined;
  ManageTournaments: undefined;
  AdminManageTournaments: undefined;
  Teams: undefined;
};

export type ManageStackNavigatorList = {
  ManageTeams: undefined;
  ManageMatches: undefined;
  ManageResults: undefined;
};

const Drawer = createDrawerNavigator<DrawerNavigatorParamList>();
const DrawerStack = createNativeStackNavigator<DrawerNavigatorScreenList>();
const DrawerScreens = () => {
  const { tournamentState } = useTournamentContext();
  return (
    <DrawerStack.Navigator
      screenOptions={{
        presentation: "transparentModal",
        headerShown: false,
        contentStyle: { backgroundColor: "transparent" },
        animation: "slide_from_right",
      }}
    >
      <DrawerStack.Screen
        options={{
          title: "Home",
        }}
        name="Landing"
        component={Landing}
      />
      <DrawerStack.Screen
        options={{
          title: "Select Tournament",
        }}
        name="SelectTournament"
        component={SelectTournament}
      />
      {tournamentState.name ? (
        <DrawerStack.Screen
          options={{
            title: tournamentState.name,
          }}
          name="SelectedTournament"
          component={TabNavigator}
        />
      ) : null}

      <DrawerStack.Screen name="AdminManageTournaments" component={ManageTabNavigator} />

      <DrawerStack.Screen
        options={{
          title: "Tournaments",
        }}
        name="ManageTournaments"
        component={Tournaments}
      />
    </DrawerStack.Navigator>
  );
};
export default function DrawerNavigator(): JSX.Element {
  const { tournamentState, setTournament } = useTournamentContext();
  const { logoutUser, userState } = useUserContext();
  return (
    <Drawer.Navigator
      drawerContent={(props: DrawerContentComponentProps & { navigation: any }) => (
        <DrawerContentScrollView {...props}>
          <DrawerItem
            onPress={() => null}
            pressColor={"#85BFA1"}
            icon={() => <View style={DrawerStyles.drawerHeadingImage}></View>}
            style={DrawerStyles.drawerHeading}
            label={() => (
              <View>
                <Text style={DrawerStyles.drawerHeadingHeaderText}>Welcome</Text>
                <Text style={DrawerStyles.drawerHeadingText}>{userState.name}</Text>
              </View>
            )}
          />
          <DrawerItem
            label={() => <DrawerItemWithIcon>Home</DrawerItemWithIcon>}
            onPress={() => props.navigation.navigate("Landing")}
          />
          <DrawerItem
            label={() => (
              <DrawerItemWithIcon>
                {tournamentState.id ? "Change Tournament" : "Select Tournament"}
              </DrawerItemWithIcon>
            )}
            onPress={() => props.navigation.navigate("SelectTournament")}
          />
          <DrawerItem
            style={tournamentState.name ? {} : { display: "none" }}
            label={() => <DrawerItemWithIcon>{tournamentState.name}</DrawerItemWithIcon>}
            onPress={() => props.navigation.navigate("SelectedTournament")}
          />
          <DrawerItem
            label={() => <DrawerItemWithIcon>Tournaments</DrawerItemWithIcon>}
            onPress={() => props.navigation.navigate("ManageTournaments")}
          />
          {tournamentState.isOwner ? (
            <DrawerItem
              label={() => <DrawerItemWithIcon>Manage</DrawerItemWithIcon>}
              onPress={() => props.navigation.navigate("AdminManageTournaments")}
            />
          ) : null}

          <DrawerItem
            style={{ marginTop: 300 }}
            label={() => <DrawerItemWithIcon>Logout</DrawerItemWithIcon>}
            onPress={() => {
              Alert.alert(
                "Log out",
                "Are you sure you want to log out?",
                [
                  {
                    text: "Cancel",
                    style: "cancel",
                  },
                  {
                    text: "YES",
                    onPress: () => {
                      if (setTournament) setTournament({ id: null, name: null });
                      if (logoutUser) logoutUser();
                    },
                  },
                ],
                { cancelable: true }
              );
            }}
          />
        </DrawerContentScrollView>
      )}
      screenOptions={({ route }) => ({
        drawerStyle: DrawerStyles.drawerStyle,
        drawerActiveTintColor: "white",
        drawerLabelStyle: DrawerStyles.drawerLabelStyle,
        drawerContentOptions: {
          activeTintColor: "#000c00",
          style: DrawerStyles.drawerContentStyle,
          labelStyle: DrawerStyles.drawerContentLabelStyle,
        },
        headerStyle: DrawerStyles.headerStyle,
        headerTintColor: "white",
        headerShadowVisible: false,
      })}
      initialRouteName="DrawerScreens"
    >
      <Drawer.Screen
        options={(props) => ({
          drawerItemStyle: { display: "none" },
          title: "Fix This",
        })}
        name="DrawerScreens"
        component={DrawerScreens}
      />
    </Drawer.Navigator>
  );
}

const DrawerItemWithIcon = ({ children }: { children: ReactNode }) => {
  return (
    <View style={{ flexDirection: "row", width: "100%" }}>
      <Text
        numberOfLines={1}
        style={{
          flex: 1,
          marginLeft: 20,
          color: "white",
          fontSize: 16,
          fontFamily: "RobotoSlab-Regular",
        }}
      >
        {children}
      </Text>
      <AntDesign
        style={{
          alignSelf: "center",
          marginRight: children === "Logout" ? -24 : -20,
        }}
        name={children === "Logout" ? "logout" : "caretright"}
        size={children === "Logout" ? 25 : 15}
        color="white"
      />
    </View>
  );
};

const DrawerStyles = StyleSheet.create({
  drawerHeading: {
    marginBottom: 60,
    borderBottomColor: "#fff",
    borderBottomWidth: 1,
    paddingVertical: 20,
  },
  drawerHeadingImage: {
    borderRadius: 100,
    backgroundColor: "grey",
    borderWidth: 2,
    borderColor: "#fff",
    width: 45,
    height: 45,
    marginRight: -16,
  },
  drawerHeadingText: {
    fontSize: 12,
    fontFamily: "RobotoSlab-Regular",
    color: "white",
  },
  drawerHeadingHeaderText: {
    flex: 1,
    fontSize: 20,
    fontFamily: "RobotoSlab-Regular",
    color: "white",
    letterSpacing: 0.5,
  },
  drawerStyle: {
    backgroundColor: "rgba(82, 140, 110, 0.95)",
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    borderRightWidth: 1,
    borderTopWidth: 0,
    borderBottomWidth: 1,
    borderColor: "transparent",
  },
  drawerLabelStyle: {
    color: "white",
    fontSize: 14,
    marginLeft: 20,
    fontFamily: "RobotoSlab-Regular",
  },
  drawerContentStyle: {
    marginTop: 50,
    marginHorizontal: -5,
  },
  drawerContentLabelStyle: {
    marginLeft: 5,
    color: "white",
    fontSize: 16,
    fontFamily: "RobotoSlab-Regular",
  },
  headerStyle: {
    backgroundColor: "#528C6E",
  },
});
