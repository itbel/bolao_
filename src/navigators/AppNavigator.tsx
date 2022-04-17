import AuthNavigator from "./AuthNavigator";
import DrawerNavigator from "./DrawerNavigator";

export default function AppNavigator() {
    const isSignedIn = false;
    return isSignedIn ? <DrawerNavigator /> : <AuthNavigator />;
}
