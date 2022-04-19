import {
    Alert,
    ImageBackground,
    Text,
    TextInput as RNTextInput,
    View,
} from "react-native";
import styles from "./Login.styles";
import SimpleButton from "../../components/Button/SimpleButton";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useEffect, useRef, useState } from "react";
import SimpleTextInput from "../../components/TextInput/SimpleTextInput";
import useAuthForm from "../../hooks/useAuthForm";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../navigators/AuthNavigator";
import { Auth } from "aws-amplify";
import { RouteProp } from "@react-navigation/native";
type VerifyProps = {
    navigation: NativeStackNavigationProp<AuthStackParamList, "Verify">;
    route: RouteProp<AuthStackParamList, "Verify">;
};
export default function Verify(props: VerifyProps) {
    const codeRef = useRef<RNTextInput>(null);
    const initialValues = {
        email: props.route.params?.email ?? "",
        password: props.route.params?.password ?? "",
    };
    const { form, handleChange, handleSubmit, isSubmitting } = useAuthForm(
        "verify",
        initialValues
    );
    const [isResending, setIsResending] = useState(false);
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                resizeMode="cover"
                source={require("../../../assets/media/forgot.png")}
                style={styles.background}
            >
                <Text style={styles.header}>Verify</Text>
                <Text style={styles.subheader}>Check your email for your code</Text>
                <SimpleTextInput
                    autoCompleteType="email"
                    autoCapitalize="none"
                    onChangeText={(value) => handleChange("email", value)}
                    value={form.email}
                    keyboardType="email-address"
                    onSubmitEditing={() => codeRef.current?.focus()}
                    returnKeyType="next"
                    placeholder="Enter your email..."
                />
                <SimpleTextInput
                    autoCompleteType="off"
                    autoCapitalize="none"
                    onChangeText={(value) => handleChange("code", value)}
                    value={form.code}
                    ref={codeRef}
                    keyboardType="number-pad"
                    returnKeyType="done"
                    placeholder="Enter your code..."
                />

                <SimpleButton
                    isLoading={isSubmitting || isResending}
                    labelStyle={styles.buttonLabel}
                    buttonStyle={styles.button}
                    label="Verify Account"
                    onPress={handleSubmit}
                />
                <Text style={{ color: "white", textAlign: "center", marginTop: 60 }}>
                    <Text
                        onPress={async () => {
                            if (form.email) {
                                setIsResending(true);
                                try {
                                    await Auth.resendSignUp(form.email);
                                    Alert.alert(
                                        "Success",
                                        "A new code has been sent to your email."
                                    );
                                } catch (error) {
                                    Alert.alert("Error", "failed to resend code");
                                } finally {
                                    setIsResending(false);
                                }
                            }
                        }}
                        style={{ fontWeight: "bold" }}
                    >
                        Resend code
                    </Text>
                </Text>
                <Text style={{ color: "white", textAlign: "center", marginTop: 10 }}>
                    Already have an account?{" "}
                    <Text
                        onPress={() => props.navigation.navigate("Login")}
                        style={{ fontWeight: "bold" }}
                    >
                        Login
                    </Text>
                </Text>
            </ImageBackground>
        </SafeAreaView>
    );
}
