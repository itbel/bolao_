export type UserState = {
    id: string | null;
    name: string | null;
};

export type LoginFormData = {
    email: string;
    password: string;
};

export type RegisterFormData = LoginFormData & { name: string };
export type VerifyFormData = { email: string; code: string };

export type UserContextType = {
    userState: UserState;
    loginUser: ({ email, password }: LoginFormData) => Promise<boolean>;
    registerUser: ({ name, email, password }: RegisterFormData) => Promise<boolean>;
    logoutUser: () => Promise<boolean>;
    verifyUser: ({ code, email }: VerifyFormData) => Promise<boolean>;
    isLoggedIn: boolean;
    getUser: () => Promise<undefined>;
};

export type UserContextProviderProps = {
    children: React.ReactNode;
};

export type TournamentState = {
    id: string | null;
    name: string | null;
};

export type TournamentContextType = {
    tournamentState: TournamentState;
    setTournament: (tournamentState: TournamentState) => undefined;
};

export type TournamentContextProviderProps = {
    children: React.ReactNode;
};
