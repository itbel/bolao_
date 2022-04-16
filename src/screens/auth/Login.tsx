import { View, Text, TextInput } from "react-native";
import SimpleButton from "../../components/Button/SimpleButton";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Login() {
    const login = async () => {
        return null;
    };
    return (
        <SafeAreaView>
            <Text>Login</Text>
            <Text>Username</Text>
            <TextInput
                style={{
                    color: "white",
                    borderBottomColor: "white",
                    paddingVertical: 8,
                    fontSize: 16,
                    borderBottomWidth: 2,
                }}
            />
            <Text>Password</Text>
            <TextInput
                style={{
                    color: "white",
                    borderBottomColor: "white",
                    paddingVertical: 8,
                    fontSize: 16,
                    borderBottomWidth: 2,
                }}
            />
            <SimpleButton
                labelStyle={{ textAlign: "center" }}
                buttonStyle={{ marginTop: 40 }}
                label="Login"
                onPress={login}
            />
        </SafeAreaView>
    );
}
