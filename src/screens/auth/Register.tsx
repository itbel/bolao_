import { ImageBackground, Text, TextInput as RNTextInput } from "react-native";
import styles from "./Login.styles";
import SimpleButton from "../../components/Button/SimpleButton";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRef } from "react";
import SimpleTextInput from "../../components/TextInput/SimpleTextInput";
import useAuthForm from "../../hooks/useAuthForm";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../navigators/AuthNavigator";
import { RouteProp } from "@react-navigation/native";
type RegisterProps = {
    navigation: NativeStackNavigationProp<AuthStackParamList, "Register">;
    route: RouteProp<AuthStackParamList, "Register">;
};
export default function Register({ navigation }: RegisterProps) {
    const passwordRef = useRef<RNTextInput>(null);
    const nameRef = useRef<RNTextInput>(null);
    const { form, handleChange, handleSubmit, isSubmitting } = useAuthForm("register");
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                resizeMode="cover"
                source={require("../../../assets/media/register.png")}
                style={styles.background}
            >
                <Text style={styles.header}>Register</Text>
                <Text style={styles.subheader}>Create an account to login</Text>
                <SimpleTextInput
                    autoCompleteType="email"
                    autoCapitalize="none"
                    keyboardType="email-address"
                    onChangeText={(value) => handleChange("email", value)}
                    value={form.email}
                    onSubmitEditing={() => passwordRef.current?.focus()}
                    returnKeyType="next"
                    placeholder="Enter your email..."
                />
                <SimpleTextInput
                    secureTextEntry={true}
                    autoCompleteType="password"
                    autoCapitalize="none"
                    onChangeText={(value) => handleChange("password", value)}
                    value={form.password}
                    onSubmitEditing={() => nameRef.current?.focus()}
                    ref={passwordRef}
                    returnKeyType="next"
                    placeholder="Enter your password..."
                />
                <SimpleTextInput
                    autoCompleteType="name"
                    autoCapitalize="words"
                    onChangeText={(value) => handleChange("name", value)}
                    value={form.name}
                    ref={nameRef}
                    returnKeyType="done"
                    placeholder="Enter your name..."
                />
                <SimpleButton
                    isLoading={isSubmitting}
                    labelStyle={styles.buttonLabel}
                    buttonStyle={styles.button}
                    label="Register"
                    onPress={handleSubmit}
                />
                <Text style={{ color: "white", textAlign: "center", marginTop: 60 }}>
                    Already have an account?{" "}
                    <Text
                        onPress={() => navigation.navigate("Login")}
                        style={{ fontWeight: "bold" }}
                    >
                        Login
                    </Text>
                </Text>
                <Text style={{ color: "white", textAlign: "center", marginTop: 30 }}>
                    Have a code?{" "}
                    <Text
                        onPress={() => navigation.navigate("Verify")}
                        style={{ fontWeight: "bold" }}
                    >
                        Verify
                    </Text>{" "}
                    your account.
                </Text>
            </ImageBackground>
        </SafeAreaView>
    );
}
