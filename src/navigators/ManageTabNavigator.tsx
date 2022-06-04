import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, View, Platform } from "react-native";
import { Assets } from "../../assets";
import ManageTeams from "../screens/Manage/ManageTeams/ManageTeams";
import ManageRounds from "../screens/Manage/ManageRounds/ManageRounds";
import ManageRound from "../screens/Manage/ManageRound/ManageRound";
import ManageResults from "../screens/Manage/ManageResults/ManageResults";
import { Round } from "../API";

export type ManageTabNavigatorParamList = {
  ManageTeams: undefined;
  ManageRounds: undefined;
  ManageRound: { round: Round };
  ManageResults: undefined;
};

const Tab = createBottomTabNavigator<ManageTabNavigatorParamList>();

export default function ManageTabNavigator(): JSX.Element {
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,

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
            if (route.name === "ManageTeams")
              return (
                <Image
                  style={focused ? {} : { opacity: 0.3 }}
                  source={Assets.media.guess}
                ></Image>
              );
            else if (route.name === "ManageRounds")
              return (
                <Image
                  style={focused ? {} : { opacity: 0.3 }}
                  source={Assets.media.rules}
                ></Image>
              );
            else if (route.name === "ManageResults")
              return (
                <Image
                  style={focused ? {} : { opacity: 0.3 }}
                  source={Assets.media.rounds}
                ></Image>
              );
          },
        })}
        initialRouteName="ManageResults"
      >
        <Tab.Screen
          options={{ title: "Manage Results" }}
          name="ManageResults"
          component={ManageResults}
        />
        <Tab.Screen
          options={{ title: "Manage Rounds" }}
          name="ManageRounds"
          component={ManageRounds}
        />
        <Tab.Screen
          options={{
            title: "Manage Round",
            tabBarStyle: { display: "none" },
            tabBarButton: () => null,
          }}
          name="ManageRound"
          component={ManageRound}
        />
        <Tab.Screen
          options={{ title: "Manage Teams" }}
          name="ManageTeams"
          component={ManageTeams}
        />
      </Tab.Navigator>
    </View>
  );
}
