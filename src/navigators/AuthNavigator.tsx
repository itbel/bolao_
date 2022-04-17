import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/auth/Login";
import Register from "../screens/auth/Register";
import ForgotPassword from "../screens/auth/ForgotPassword";
import Verify from "../screens/auth/Verify";
const AuthStack = createNativeStackNavigator();
export type AuthStackParamList = {
    Splash: undefined;
    Login: undefined;
    Register: undefined;
    ForgotPassword: undefined;
    Veryfy: undefined;
};
export default function AuthNavigator() {
    return (
        <AuthStack.Navigator screenOptions={{ headerShown: false }}>
            <AuthStack.Screen name="Login" component={Login} />
            <AuthStack.Screen name="Register" component={Register} />
            <AuthStack.Screen name="ForgotPassword" component={ForgotPassword} />
            <AuthStack.Screen name="Verify" component={Verify} />
        </AuthStack.Navigator>
    );
}
