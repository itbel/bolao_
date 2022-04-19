import { View, Text } from "react-native";
import { useUserContext } from "../contexts/UserContext";
export default function Landing() {
    const { userState } = useUserContext();
    return (
        <View>
            <Text>Landing</Text>
            <Text>Logged in as {userState.name}</Text>
        </View>
    );
}
