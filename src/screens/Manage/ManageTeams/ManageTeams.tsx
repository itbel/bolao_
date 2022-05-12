import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
  Modal,
  Button,
} from "react-native";
import useTeams from "../../../hooks/useTeams";
import AntDesign from "@expo/vector-icons/AntDesign";
import React, { useState } from "react";
import SimpleTextInput from "../../../components/TextInput/SimpleTextInput";
import SimpleModal from "../../../components/Modal/SimpleModal";
//import useMatches from "../../hooks/useMatches";
export default function ManageTeams() {
  const { teams, isLoading } = useTeams();
  const [isOpen, setIsOpen] = useState(false);
  const [teamName, setTeamName] = useState("");
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
          <ScrollView showsVerticalScrollIndicator={false}>
            <SimpleModal isOpen={isOpen} setIsOpen={setIsOpen} />
            <View style={styles.headingContainer}>
              <Text style={styles.heading}>Teams</Text>
              <TouchableOpacity onPress={() => setIsOpen(true)} style={{ padding: 25 }}>
                <AntDesign name="plus" size={24} color="#000" />
              </TouchableOpacity>
            </View>

            <View style={{ marginHorizontal: 30 }}>
              {teams.map((a, index) => {
                return (
                  <View key={index}>
                    <Text
                      style={{
                        flex: 1,
                        fontFamily: "RobotoSlab-Regular",
                        fontSize: 22,
                        lineHeight: 48,
                      }}
                    >
                      {a.name}
                    </Text>
                  </View>
                );
              })}
            </View>
          </ScrollView>
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
  headingContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    marginHorizontal: 30,
    flexDirection: "row",
  },
  heading: {
    flex: 1,
    color: "#000",
    fontFamily: "RobotoSlab-Regular",
    fontSize: 30,
  },
});
