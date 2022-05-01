import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import AppLoading from "expo-app-loading";
import { useEffect, useState } from "react";
import { TournamentProvider } from "./src/contexts/TournamentContext";
import { UserProvider } from "./src/contexts/UserContext";
import AppNavigator from "./src/navigators/AppNavigator";
import { Amplify, Hub } from "aws-amplify";
import config from "./aws-exports";
import loadFonts from "./src/loadFonts";
import initNotifications from "./src/utils/initializeNotifications";

Amplify.configure(config);
export default function App() {
  const [isReady, setIsReady] = useState(false);
  const loadResources = async () => {
    await loadFonts();
  };
  useEffect(() => {
    const hubListener = (hubData: any) => {
      switch (hubData.payload.event) {
        case "signIn":
          initNotifications();
          console.log("Signed In");
          break;
        case "signOut":
          console.log("Signed Out");
          break;
        default:
          break;
      }
    };
    Hub.listen("auth", hubListener);
    return () => {
      Hub.remove("auth", hubListener);
    };
  }, []);
  const navTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "#528C6E",
    },
  };
  return (
    <UserProvider>
      {!isReady ? (
        <AppLoading
          onError={(e) => console.log("error", e)}
          startAsync={loadResources}
          onFinish={() => setIsReady(true)}
        ></AppLoading>
      ) : (
        <TournamentProvider>
          <NavigationContainer theme={navTheme}>
            <AppNavigator />
          </NavigationContainer>
        </TournamentProvider>
      )}
    </UserProvider>
  );
}
