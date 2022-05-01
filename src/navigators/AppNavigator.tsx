import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useEffect, useRef } from "react";
import { useTournamentContext } from "../contexts/TournamentContext";
import { useUserContext } from "../contexts/UserContext";
import AuthNavigator from "./AuthNavigator";
import DrawerNavigator, { DrawerNavigatorScreenList } from "./DrawerNavigator";

export default function AppNavigator() {
  // transform this into app boostrapper
  const navigation =
    useNavigation<NativeStackNavigationProp<DrawerNavigatorScreenList>>();
  const { isLoggedIn, getUser } = useUserContext();
  const { tournamentState } = useTournamentContext();
  const tourRef = useRef(tournamentState.id);
  useEffect(() => {
    getUser();
  }, []);
  useEffect(() => {
    if (tourRef?.current) tourRef.current = tournamentState.id;
    if (tournamentState.id !== tourRef?.current) {
      navigation.navigate("SelectedTournament");
    }
  }, [tournamentState.id]);
  return isLoggedIn ? <DrawerNavigator /> : <AuthNavigator />;
}
