import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import { Alert } from "react-native";
import { useUserContext } from "../contexts/UserContext";
import { AuthStackParamList } from "../navigators/AuthNavigator";

type FormType = "login" | "register" | "verify";
type InitialValuesType = {
    email?: string;
    password?: string;
    name?: string;
};
export default function useAuthForm(type: FormType, initialValues?: InitialValuesType) {
    const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();
    const { loginUser, registerUser, verifyUser } = useUserContext();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [form, setForm] = useState({
        email: initialValues?.email ?? "",
        password: initialValues?.password ?? "",
        name: initialValues?.name ?? "",
        code: "",
    });

    const handleChange = (key: keyof typeof form, value: string) => {
        setForm({
            ...form,
            [key]: value,
        });
    };
    const handleSubmit = async () => {
        setIsSubmitting(true);
        if (type === "login") {
            const successLogin = await loginUser({
                email: form.email,
                password: form.password,
            });
            // if successful user will be redirected to home, prevent setting state in unmounted component
            if (!successLogin) {
                setIsSubmitting(false);
            }
        } else if (type === "register") {
            const successRegister = await registerUser({
                email: form.email,
                password: form.password,
                name: form.name,
            });
            if (successRegister) {
                // navigate to verify
                navigation.navigate("Verify", {
                    email: form.email,
                    password: form.password,
                });
            }
        } else if (type === "verify") {
            const verifySuccess = await verifyUser({
                code: form.code,
                email: form.email,
            });
            if (verifySuccess) {
                // navigate to home
                console.log("Successfully verified");
                if (form.email && form.password) {
                    const successLogin = await loginUser({
                        email: form.email,
                        password: form.password,
                    });
                    if (!successLogin) setIsSubmitting(false);
                } else navigation.navigate("Login");
            } else {
                setIsSubmitting(false);
            }
        }
    };
    return { isSubmitting, form, handleSubmit, handleChange };
}
