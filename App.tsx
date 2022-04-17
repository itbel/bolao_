import { NavigationContainer } from "@react-navigation/native";
import AppLoading from "expo-app-loading";
import { useState } from "react";
import { TournamentProvider } from "./src/contexts/TournamentContext";
import { UserProvider } from "./src/contexts/UserContext";
import AppNavigator from "./src/navigators/AppNavigator";
import { Amplify } from "aws-amplify";
import config from "./aws-exports";
import loadFonts from "./src/loadFonts";

Amplify.configure(config);
export default function App() {
    const [isReady, setIsReady] = useState(false);
    const loadResources = async () => {
        await loadFonts();
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
                    <NavigationContainer>
                        <AppNavigator />
                    </NavigationContainer>
                </TournamentProvider>
            )}
        </UserProvider>
    );
}
