import { useContext, useState, createContext, useEffect } from "react";
import {
    LoginFormData,
    RegisterFormData,
    UserContextProviderProps,
    UserContextType,
    UserState,
    VerifyFormData,
} from "./context.types";
import { Auth } from "aws-amplify";
import { Alert } from "react-native";
import React from "react";

const userStateInit: UserState = {
    id: null,
    name: null,
};

const UserContext = createContext<UserContextType>({
    userState: userStateInit,
    loginUser: async () => false,
    logoutUser: async () => false,
    registerUser: async () => false,
    verifyUser: async () => false,
    isLoggedIn: false,
    getUser: async () => undefined,
});

export const UserProvider = (props: UserContextProviderProps) => {
    const [userState, setUserState] = useState<UserState>({
        id: null,
        name: null,
    });
    const verifyUser = async ({ code, email }: VerifyFormData) => {
        try {
            const res = await Auth.confirmSignUp(email, code);
            console.log({ res });
            return true;
        } catch (error: any) {
            Alert.alert("Error", error.message || "Something went wrong");
            return false;
        }
    };
    const registerUser = async ({
        email,
        password,
        name,
    }: RegisterFormData): Promise<boolean> => {
        try {
            const res = await Auth.signUp({
                username: email,
                password: password,
                attributes: {
                    name: name,
                },
            });
            return true;
        } catch (error: any) {
            Alert.alert("Error", error.message || "Something went wrong");
            return false;
        }
    };
    const loginUser = async ({
        email,
        password,
    }: {
        email: string;
        password: string;
    }): Promise<boolean> => {
        try {
            const res = await Auth.signIn(email, password);
            setUserState({ id: res.attributes.sub, name: res.attributes.name });
            console.log("Signed in");
            return true;
        } catch (error: any) {
            Alert.alert("Error", error.message || "Something went wrong");
            return false;
        }
    };

    const logoutUser = async (): Promise<boolean> => {
        try {
            await Auth.signOut();
            setUserState(userStateInit);
            return true;
        } catch (error: any) {
            Alert.alert("Error", error.message || "Something went wrong");
            return false;
        }
    };

    const getUser = async (): Promise<undefined> => {
        try {
            const user = await Auth.currentAuthenticatedUser();
            if (user) {
                console.log("loggedin user", user);
                Alert.alert(
                    "User found",
                    `${user.attributes.sub}, \n${user.attributes.name}`
                );
                setUserState({ id: user.attributes.sub, name: user.attributes.name });
            } else {
                setUserState(userStateInit);
                Alert.alert("Error", "User not found");
            }
        } catch (error) {
            console.log(error);
        }
        return;
    };

    return (
        <UserContext.Provider
            value={{
                userState,
                loginUser,
                logoutUser,
                verifyUser,
                registerUser,
                isLoggedIn: Boolean(userState.id),
                getUser,
            }}
        >
            {props.children}
        </UserContext.Provider>
    );
};
export const useUserContext = () => {
    return useContext(UserContext);
};
