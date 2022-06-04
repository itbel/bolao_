import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import React, { useState } from "react";
import useRounds from "../../../hooks/useRounds";
import RoundModal from "../../../components/Modal/RoundModal";
import { ManageTabNavigatorParamList } from "../../../navigators/ManageTabNavigator";
import { RouteProp } from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

type ManageRoundProps = {
  navigation: BottomTabNavigationProp<ManageTabNavigatorParamList, "ManageRounds">;
  route: RouteProp<ManageTabNavigatorParamList, "ManageRounds">;
};
export default function ManageRounds({ navigation, route }: ManageRoundProps) {
  const { rounds, isLoading } = useRounds();
  const [isOpen, setIsOpen] = useState(false);
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
            <RoundModal isOpen={isOpen} setIsOpen={setIsOpen} />
            <View style={styles.headingContainer}>
              <Text style={styles.heading}>Rounds</Text>
              <TouchableOpacity onPress={() => setIsOpen(true)} style={{ padding: 25 }}>
                <AntDesign name="plus" size={24} color="#000" />
              </TouchableOpacity>
            </View>

            <View style={{ marginHorizontal: 30 }}>
              {rounds.map((round, index) => {
                return (
                  <View
                    style={{
                      backgroundColor: "#efefef",
                      marginBottom: 16,
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    key={index}
                  >
                    <Text
                      style={{
                        flex: 1,
                        paddingLeft: 16,
                        fontFamily: "RobotoSlab-Regular",
                        fontSize: 22,
                        lineHeight: 48,
                      }}
                    >
                      {round.name}
                    </Text>
                    <TouchableOpacity
                      onPress={() => navigation.navigate("ManageRound", { round: round })}
                      style={{ padding: 25 }}
                    >
                      <AntDesign name="setting" size={24} color="#000" />
                    </TouchableOpacity>
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
