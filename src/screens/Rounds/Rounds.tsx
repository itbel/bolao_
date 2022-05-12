import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from "react-native";
import { Match } from "../../API";
//import useMatches from "../../hooks/useMatches";
export default function Rounds() {
  //const { matches, isLoading } = useMatches();
  const matches: Match[] = [];
  const isLoading = false;
  return (
    <View style={styles.backgroundd}>
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
          <>
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{ flexDirection: "column" }}
            >
              <Text style={styles.heading}>Rounds</Text>
              <View style={{ marginHorizontal: 30 }}>
                {matches.map((a, index) => {
                  return (
                    <View key={index}>
                      <Text
                        style={{
                          flex: 1,
                          fontFamily: "RobotoSlab-Regular",
                          fontSize: 22,
                        }}
                      >
                        Round: {a.round}
                      </Text>
                      <Text
                        style={{
                          marginVertical: 8,
                          fontFamily: "RobotoSlab-Regular",
                          fontSize: 16,
                        }}
                      >
                        {a.homeTeam.name} {a.homeTeamScore} x {a.awayTeamScore}{" "}
                        {a.awayTeam.name}
                      </Text>
                    </View>
                  );
                })}
              </View>
            </ScrollView>
          </>
        )}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  backgroundd: {
    backgroundColor: "#528C6E",
    flex: 1,
  },
  container: {
    flexDirection: "column",
    justifyContent: "flex-start",
    flex: 1,
    marginHorizontal: 0,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: "#fff",
  },
  buttonStyle: {
    marginTop: 30,
    marginHorizontal: 30,
    backgroundColor: "#528C6E",
    paddingVertical: 25,
  },
  buttonLabelStyle: {
    textAlign: "center",
    fontSize: 16,
    fontFamily: "RobotoSlab-Regular",
    color: "white",
  },
  heading: {
    marginTop: 30,
    marginBottom: 20,
    marginHorizontal: 30,
    color: "#000",
    fontFamily: "RobotoSlab-Regular",
    fontSize: 30,
  },
});
