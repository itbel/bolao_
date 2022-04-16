import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import About from "../screens/About";
import AuthNavigator from "./AuthNavigator";

const AppStack = createNativeStackNavigator();
export type AppStackParamList = {
    Home: undefined;
    About: undefined;
};
function AppStackNavigator() {
    return (
        <AppStack.Navigator>
            <AppStack.Screen name="Home" component={Home} />
            <AppStack.Screen name="About" component={About} />
        </AppStack.Navigator>
    );
}

export default function AppNavigator() {
    const isSignedIn = false;
    return isSignedIn ? <AppStackNavigator /> : <AuthNavigator />;
}
