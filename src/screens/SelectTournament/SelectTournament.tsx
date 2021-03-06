import {
  View,
  Text,
  TouchableHighlight,
  ScrollView,
  StatusBar,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import React from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { DrawerNavigatorScreenList } from "../../navigators/DrawerNavigator";
import { RouteProp } from "@react-navigation/native";
import { useTournamentContext } from "../../contexts/TournamentContext";
import useJoinedTournaments from "../../hooks/useJoinedTournaments";
import TournamentCard from "../../components/TournamentCard/TournamentCard";
import { useUserContext } from "../../contexts/UserContext";

type SelectTournamentProps = {
  navigation: NativeStackNavigationProp<DrawerNavigatorScreenList, "SelectTournament">;
  route: RouteProp<DrawerNavigatorScreenList, "SelectTournament">;
};
export default function SelectTournament(props: SelectTournamentProps) {
  const { navigation } = props;
  const { joinedTournaments, isLoading } = useJoinedTournaments();
  return (
    <View style={styles.backgroundd}>
      <StatusBar barStyle="dark-content" backgroundColor="#528C6E"></StatusBar>

      <View style={styles.container}>
        {isLoading ? (
          <View style={{ position: "absolute", top: "50%", left: "45%" }}>
            <ActivityIndicator
              animating={isLoading}
              color={"#000"}
              size={"large"}
            ></ActivityIndicator>
          </View>
        ) : (
          <View style={{ marginHorizontal: 30, flex: 1 }}>
            {joinedTournaments?.length !== 0 ? (
              <>
                <Text style={styles.heading}>Select tournament</Text>
                <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
                  {joinedTournaments ? (
                    joinedTournaments.map((tournament) => {
                      return (
                        <TournamentCard
                          key={tournament.id}
                          joined={true}
                          tournament={tournament}
                        />
                      );
                    })
                  ) : (
                    <>
                      <Text style={styles.subHeading}>No tournaments joined</Text>
                      <TouchableHighlight
                        underlayColor="#85BFA1"
                        onPress={() => navigation.navigate("ManageTournaments")}
                        style={styles.buttonStyle}
                      >
                        <Text style={styles.buttonLabelStyle}>Join A Tournament</Text>
                      </TouchableHighlight>
                    </>
                  )}
                </ScrollView>
              </>
            ) : (
              <>
                <Text numberOfLines={1} style={styles.heading}>
                  No joined tournaments
                </Text>
                <TouchableHighlight
                  underlayColor="#85BFA1"
                  onPress={() => {
                    navigation.navigate("ManageTournaments");
                  }}
                  style={styles.buttonStyle}
                >
                  <Text style={styles.buttonLabelStyle}>View all tournaments</Text>
                </TouchableHighlight>
              </>
            )}
          </View>
        )}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  backgroundd: {
    backgroundColor: "transparent",

    flex: 1,
  },
  container: {
    flexDirection: "column",
    justifyContent: "flex-start",
    borderWidth: 1,
    borderColor: "#c8c8c8",
    borderRadius: 50,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    flex: 1,
    marginHorizontal: 0,
    backgroundColor: "#fff",
  },
  buttonStyle: {
    backgroundColor: "#528C6E",
    padding: 24,
    alignSelf: "center",
    position: "absolute",
    paddingHorizontal: 50,
    bottom: 40,
  },
  buttonLabelStyle: {
    textAlign: "center",
    fontSize: 16,
    fontFamily: "RobotoSlab-Regular",
    color: "white",
  },
  heading: {
    marginTop: 60,
    marginBottom: 30,
    color: "#000",
    fontFamily: "RobotoSlab-Regular",
    fontSize: 30,
  },
  subHeading: {
    marginTop: 60,
    color: "#000",
    fontFamily: "RobotoSlab-Regular",
    fontSize: 26,
  },
});
