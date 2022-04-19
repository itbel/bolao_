import { useEffect } from "react";
import { useUserContext } from "../contexts/UserContext";
import AuthNavigator from "./AuthNavigator";
import DrawerNavigator from "./DrawerNavigator";

export default function AppNavigator() {
    // transform this into app boostrapper
    const { isLoggedIn, getUser } = useUserContext();
    useEffect(() => {
        getUser();
    }, []);
    return isLoggedIn ? <DrawerNavigator /> : <AuthNavigator />;
}
