import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import TournamentCard from "../../components/TournamentCard/TournamentCard";
import { useTournamentContext } from "../../contexts/TournamentContext";
import useAllTournaments from "../../hooks/useAllTournaments";
export default function Tournaments() {
    const { setTournament } = useTournamentContext();
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
                        {tournaments.map((tournament) => {
                            return (
                                <TournamentCard
                                    key={tournament.id}
                                    type="join"
                                    tournament={tournament}
                                />
                            );
                        })}
                    </ScrollView>
                </View>
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
        marginTop: 50,
        marginBottom: 20,
        marginHorizontal: 30,
        color: "#000",
        fontFamily: "RobotoSlab-Regular",
        fontSize: 30,
    },
});
