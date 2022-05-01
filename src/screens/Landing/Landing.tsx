import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useLayoutEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableHighlight,
  Image,
} from "react-native";
import Assets from "../../../assets";
import { useUserContext } from "../../contexts/UserContext";
import { DrawerNavigatorScreenList } from "../../navigators/DrawerNavigator";
type LandingProps = {
  navigation: NativeStackNavigationProp<DrawerNavigatorScreenList, "Landing">;
  route: RouteProp<DrawerNavigatorScreenList, "Landing">;
};
export default function Landing(props: LandingProps) {
  const { navigation } = props;
  const { userState } = useUserContext();
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
            <Text style={styles.heading}>Overall Ranking</Text>
            <View
              style={{
                marginHorizontal: 30,
              }}
            >
              <Ranking />
            </View>
            <TouchableHighlight
              underlayColor="#85BFA1"
              onPress={() => navigation.navigate("SelectTournament")}
              style={styles.buttonStyle}
            >
              <Text style={styles.buttonLabelStyle}>Select Tournament</Text>
            </TouchableHighlight>
          </>
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
    marginHorizontal: 0,
    flex: 1,
    flexDirection: "column",
    borderWidth: 1,
    borderColor: "#c8c8c8",
    borderRadius: 50,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    justifyContent: "flex-start",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.75,
    shadowRadius: 3.84,

    elevation: 5,
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
    marginTop: 50,
    marginBottom: 20,
    marginHorizontal: 30,
    color: "#000",
    fontFamily: "RobotoSlab-Regular",
    fontSize: 30,
  },
});

const Ranking = () => {
  const players = [
    {
      name: "Igor",
      wins: 3,
    },
    {
      name: "Lucas",
      wins: 2,
    },
    {
      name: "Gabriel",
      wins: 1,
    },
    {
      name: "Diego",
      wins: 0,
    },
  ];
  return (
    <>
      {players.map((player, index) => (
        <View
          key={player.name}
          style={
            index === players.length - 1
              ? { padding: 16 }
              : {
                  padding: 16,
                  borderBottomWidth: 1,
                  borderBottomColor: "#d3d3d3",
                }
          }
        >
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                width: 50,
                height: 50,
                backgroundColor: "#528C6E",
                borderRadius: 100,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: "RobotoSlab-Regular",
                  fontSize: 14,
                  color: "white",
                }}
              >
                {index + 1}
              </Text>
            </View>
            <View style={{ flexDirection: "column" }}>
              <Text
                style={{
                  fontFamily: "RobotoSlab-Regular",
                  fontSize: 18,
                  marginLeft: 50,
                  textAlign: "left",
                  color: "black",
                }}
              >
                {player.name}{" "}
                {index === 0 && player.wins > 0 ? (
                  <Image source={Assets.crown}></Image>
                ) : null}
              </Text>
              <Text
                style={{
                  marginTop: 4,
                  fontFamily: "RobotoSlab-Regular",
                  fontSize: 12,
                  marginLeft: 50,
                  textAlign: "left",
                  color: "black",
                }}
              >
                Wins: {player.wins}{" "}
              </Text>
            </View>
          </View>
        </View>
      ))}
    </>
  );
};
