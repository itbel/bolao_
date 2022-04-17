import {
    ImageBackground,
    Text,
    StyleSheet,
    TextInput as RNTextInput,
} from "react-native";
import SimpleButton from "../../components/Button/SimpleButton";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRef } from "react";
import SimpleTextInput from "../../components/TextInput/SimpleTextInput";
import useLoginForm from "../../hooks/useLoginForm";

export default function Login() {
    const passwordRef = useRef<RNTextInput>(null);
    const { form, handleChange, handleSubmit, isSubmitting } = useLoginForm();
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
            </ImageBackground>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
    },
    background: {
        justifyContent: "center",
        flex: 1,
        padding: 20,
    },
    header: {
        color: "#fff",
        fontFamily: "RobotoSlab-Bold",
        fontSize: 30,
    },
    subheader: {
        color: "#707070",
        fontSize: 20,
        fontFamily: "RobotoSlab-Regular",
        marginBottom: 40,
    },
    button: {
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 6,

        padding: 16,
        height: 56,
    },
    buttonLabel: {
        color: "#225B00",
        fontFamily: "RobotoSlab-Regular",
        fontSize: 16,
        fontWeight: "bold",
    },
});
