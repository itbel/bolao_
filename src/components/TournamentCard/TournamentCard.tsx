import { StyleSheet, View, TouchableHighlight, Text } from "react-native";
import { Tournament } from "../../API";
import { useTournamentContext } from "../../contexts/TournamentContext";
import { useUserContext } from "../../contexts/UserContext";
type TournamentCardProps = {
  tournament: Tournament;
  joined?: boolean;
};
export default function TournamentCard(props: TournamentCardProps) {
  const { tournament, joined } = props;
  const { tournamentState, setTournament } = useTournamentContext();
  const { userState } = useUserContext();
  const isSelectedTournament = tournamentState.id === tournament.id;
  const isOwner = tournament.owner === userState.id;
  const handlePress = () => {
    if (joined) {
      setTournament({
        id: tournament.id,
        name: tournament.name,
        isOwner: isOwner,
      });
    } else {
      // join tournament : )
    }
  };
  const buttonLabel = () => {
    if (joined) {
      return isSelectedTournament ? "Selected" : "Select";
    } else {
      return "Join";
    }
  };
  return (
    <View style={styles.tournamentCard}>
      <View style={{ margin: 20 }}>
        <Text style={styles.header}>{tournament.name}</Text>

        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          <TouchableHighlight
            disabled={tournamentState.id === tournament.id}
            underlayColor="#85BFA1"
            onPress={handlePress}
            style={[styles.buttonStyle, isSelectedTournament && styles.disabledButton]}
          >
            <Text style={styles.buttonLabelStyle}>{buttonLabel()}</Text>
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
  disabledButton: {
    backgroundColor: "#c8c8c8",
  },
});
