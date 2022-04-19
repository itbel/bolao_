import { ImageBackground, Text, TextInput as RNTextInput } from "react-native";
import styles from "./Login.styles";
import SimpleButton from "../../components/Button/SimpleButton";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useRef } from "react";
import SimpleTextInput from "../../components/TextInput/SimpleTextInput";
import useAuthForm from "../../hooks/useAuthForm";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../navigators/AuthNavigator";
import { RouteProp } from "@react-navigation/native";

type LoginProps = {
    navigation: NativeStackNavigationProp<AuthStackParamList, "Login">;
    route: RouteProp<AuthStackParamList, "Login">;
};
export default function Login(props: LoginProps) {
    const passwordRef = useRef<RNTextInput>(null);

    const { form, handleChange, handleSubmit, isSubmitting } = useAuthForm("login");
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                resizeMode="cover"
                source={require("../../../assets/media/login.png")}
                style={styles.background}
            >
                <Text style={styles.header}>Login</Text>
                <Text style={styles.subheader}>Please login to your account</Text>
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
                    ref={passwordRef}
                    returnKeyType="done"
                    placeholder="Enter your password..."
                />
                <SimpleButton
                    isLoading={isSubmitting}
                    labelStyle={styles.buttonLabel}
                    buttonStyle={styles.button}
                    label="Login"
                    onPress={handleSubmit}
                />
                <Text style={{ color: "white", textAlign: "center", marginTop: 60 }}>
                    Don&apos;t have an account?{" "}
                    <Text
                        onPress={() => props.navigation.navigate("Register")}
                        style={{ fontFamily: "RobotoSlab-Bold" }}
                    >
                        Signup
                    </Text>
                </Text>
            </ImageBackground>
        </SafeAreaView>
    );
}
