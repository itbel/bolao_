import { View, Text, StyleSheet, ScrollView } from "react-native";
import TournamentCard from "../../components/TournamentCard/TournamentCard";
import { useUserContext } from "../../contexts/UserContext";
import useAllTournaments from "../../hooks/useAllTournaments";
export default function Tournaments() {
  const { userState } = useUserContext();
  const { tournaments } = useAllTournaments();
  return (
    <View style={styles.backgroundd}>
      <View style={styles.container}>
        <Text style={styles.heading}>All tournaments</Text>
        <View style={{ marginHorizontal: 30, flex: 1 }}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ flexDirection: "column", flex: 1 }}
          >
            {tournaments?.length ? (
              tournaments.map((tournament) => {
                const isJoined = tournament.participants?.items.find(
                  (a) => a?.userID === userState.id
                );
                return (
                  <TournamentCard
                    key={tournament.id}
                    joined={Boolean(isJoined)}
                    tournament={tournament}
                  />
                );
              })
            ) : (
              <Text>No Tournaments found</Text>
            )}
          </ScrollView>
        </View>
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
    marginTop: 50,
    marginBottom: 20,
    marginHorizontal: 30,
    color: "#000",
    fontFamily: "RobotoSlab-Regular",
    fontSize: 30,
  },
});
