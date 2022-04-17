import { useContext, useState, createContext, useEffect } from "react";
import { UserContextProviderProps, UserContextType, UserState } from "./context.types";
import { Auth } from "aws-amplify";
import { Alert } from "react-native";

const userStateInit: UserState = {
    id: null,
    name: null,
};

const UserContext = createContext<UserContextType>({
    userState: userStateInit,
    loginUser: async () => undefined,
    logoutUser: async () => undefined,
    isLoggedIn: false,
    getUser: async () => undefined,
});

export const useUserContext = () => {
    return useContext(UserContext);
};

export const UserProvider = (props: UserContextProviderProps) => {
    const [userState, setUserState] = useState<UserState>({
        id: null,
        name: null,
    });

    const loginUser = async ({
        email,
        password,
    }: {
        email: string;
        password: string;
    }): Promise<undefined> => {
        try {
            const res = await Auth.signIn(email, password);
            console.log({ res });
        } catch (error: any) {
            Alert.alert("Error", error.message || "Something went wrong");
        }
        return;
    };

    const logoutUser = async (): Promise<undefined> => {
        try {
            await Auth.signOut();
            setUserState(userStateInit);
        } catch (error: any) {
            Alert.alert("Error", error.message || "Something went wrong");
        }
        return;
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
                isLoggedIn: Boolean(userState.id),
                getUser,
            }}
        >
            {props.children}
        </UserContext.Provider>
    );
};
