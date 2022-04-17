import { useState } from "react";
import { useUserContext } from "../contexts/UserContext";
export default function useLoginForm() {
    const { loginUser } = useUserContext();
    const [form, setForm] = useState({
        email: "",
        password: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const handleChange = (key: keyof typeof form, value: string) => {
        setForm({
            ...form,
            [key]: value,
        });
    };
    const handleSubmit = async () => {
        setIsSubmitting(true);
        await loginUser({ email: form.email, password: form.password });
        setIsSubmitting(false);
    };
    return { isSubmitting, form, handleSubmit, handleChange };
}
