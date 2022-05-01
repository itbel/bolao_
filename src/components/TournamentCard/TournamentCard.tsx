import { StyleSheet, View, TouchableHighlight, Text } from "react-native";
import { Tournament } from "../../API";
import { useTournamentContext } from "../../contexts/TournamentContext";
type TournamentCardProps = {
  tournament: Tournament;
  type: "join" | "select";
};
export default function TournamentCard(props: TournamentCardProps) {
  const { tournament, type } = props;
  const { tournamentState, setTournament } = useTournamentContext();
  const handlePress = () => {
    if (type === "join") {
      //join
    } else if (type === "select") {
      //select
      setTournament({
        id: tournament.id,
        name: tournament.name,
      });
    }
  };
  return (
    <View style={styles.tournamentCard}>
      <View style={{ margin: 20 }}>
        <Text style={styles.header}>{tournament.name}</Text>

        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          <TouchableHighlight
            disabled={tournament.id === tournamentState.id}
            underlayColor="#85BFA1"
            onPress={handlePress}
            style={[
              styles.buttonStyle,
              tournament.id === tournamentState.id ? { backgroundColor: "grey" } : {},
            ]}
          >
            <Text style={styles.buttonLabelStyle}>
              {type === "select"
                ? tournament.id === tournamentState.id
                  ? "Selected"
                  : "Select"
                : type === "join"
                ? "Join/Leave"
                : "Join/Leave"}
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tournamentCard: {
    flexDirection: "column",
    marginVertical: 11,
    borderWidth: 1,
    borderColor: "#a3a3a3",
    borderRadius: 6,
  },
  header: {
    flex: 1,
    color: "#000",
    fontFamily: "RobotoSlab-Regular",
    fontSize: 22,
    textAlign: "center",
  },
  subHeader: {
    flexDirection: "row",
    fontSize: 16,
    color: "#000",
    fontFamily: "RobotoSlab-Regular",
  },
  entry: {
    fontFamily: "RobotoSlab-Regular",
    color: "#9E9E9E",
  },
  buttonStyle: {
    borderRadius: 10,
    marginTop: 30,
    backgroundColor: "#528C6E",
    paddingVertical: 20,
  },
  buttonLabelStyle: {
    paddingHorizontal: 50,
    textAlign: "center",
    fontSize: 13,
    fontFamily: "RobotoSlab-Regular",
    color: "white",
  },
});
