import React, { useEffect, useState } from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import SimpleTextInput from "../TextInput/SimpleTextInput";
import * as mutations from "../../graphql/mutations";
import { useTournamentContext } from "../../contexts/TournamentContext";
import { API } from "aws-amplify";
import { CreateTeamMutation, Team } from "../../API";
import { GraphQLResult } from "@aws-amplify/api-graphql";
export default function SimpleModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [teamName, setTeamName] = useState("");
  const { tournamentState } = useTournamentContext();
  useEffect(() => {
    setTeamName("");
  }, [isOpen]);
  const createTeam = async (name: string) => {
    setIsLoading(true);
    try {
      const response = (await API.graphql({
        query: mutations.createTeam,
        variables: {
          input: {
            tournamentID: tournamentState.id,
            name: name,
          },
        },
      })) as GraphQLResult<CreateTeamMutation>;
      if (response.data?.createTeam) console.log("Success");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  const handleSubmit = async () => {
    const name = teamName.trim();
    if (name.length < 4) return;

    if (!name) return;
    createTeam(name);
  };
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isOpen}
      onRequestClose={() => {
        setIsOpen(false);
      }}
    >
      <View style={styles.container}>
        <View style={styles.modalContainer}>
          {isLoading ? (
            <View style={{}}>
              <ActivityIndicator color="#000" size="large" />
            </View>
          ) : null}
          <SimpleTextInput
            autoCompleteType="name"
            autoCapitalize="words"
            onChangeText={(value) => setTeamName(value)}
            value={teamName}
            returnKeyType="done"
            style={styles.inputStyle}
            placeholder="Enter team name..."
          />
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              disabled={isLoading}
              style={styles.addButtonStyle}
              onPress={handleSubmit}
            >
              <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>
            <TouchableOpacity
              disabled={isLoading}
              style={styles.dimissButtonStyle}
              onPress={() => setIsOpen(false)}
            >
              <Text style={styles.buttonText}>Dismiss</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0,0,0,0.8)",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    flexDirection: "row",
  },
  modalContainer: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 5,
    flex: 1,
    paddingTop: 35,
    paddingBottom: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  inputStyle: {
    color: "#000",
    width: "100%",
    paddingHorizontal: 20,
    alignSelf: "flex-start",
    paddingVertical: 16,
    fontSize: 24,
  },
  addButtonStyle: {
    padding: 16,
    flex: 1,
    marginLeft: 20,
    borderWidth: 1,
    backgroundColor: "lightgrey",
    borderRadius: 2,
    marginRight: 4,
    borderColor: "#c8c8c8",
  },
  dimissButtonStyle: {
    padding: 16,
    flex: 1,
    marginRight: 20,
    borderWidth: 1,
    backgroundColor: "#fff",
    marginLeft: 4,
    borderRadius: 2,
    borderColor: "#efefef",
  },
  buttonText: {
    textAlign: "center",
    fontSize: 14,
    textTransform: "uppercase",
    fontFamily: "RobotoSlab-Bold",
  },
});
