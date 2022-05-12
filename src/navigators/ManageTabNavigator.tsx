import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, View, Platform } from "react-native";
import { Assets } from "../../assets";
import ManageTeams from "../screens/Manage/ManageTeams/ManageTeams";
import ManageMatches from "../screens/Manage/ManageMatches/ManageMatches";
import ManageResults from "../screens/Manage/ManageResults/ManageResults";

export type TabNavigatorParamList = {
  ManageTeams: undefined;
  ManageMatches: undefined;
  ManageResults: undefined;
};

const Tab = createBottomTabNavigator<TabNavigatorParamList>();

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
            else if (route.name === "ManageMatches")
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
          options={{ title: "Manage Matches" }}
          name="ManageMatches"
          component={ManageMatches}
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
