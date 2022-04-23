import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Tournament } from "../API";
import { useTournamentContext } from "../contexts/TournamentContext";
import useTournaments from "../hooks/useTournaments";
export default function Tournaments() {
    const { setTournament } = useTournamentContext();
    const { tournaments } = useTournaments();
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
                                <TouchableOpacity
                                    onPress={() =>
                                        setTournament({
                                            id: tournament.id,
                                            name: tournament.name,
                                        })
                                    }
                                    key={tournament.name}
                                >
                                    <Text>{tournament.name}</Text>
                                </TouchableOpacity>
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
