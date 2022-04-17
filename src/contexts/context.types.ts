export type UserState = {
    id: string | null;
    name: string | null;
};

export type LoginFormData = {
    email: string;
    password: string;
};
export type UserContextType = {
    userState: UserState;
    loginUser: ({ email, password }: LoginFormData) => Promise<undefined>;
    logoutUser: () => Promise<undefined>;
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
    setTournament?: (tournamentState: TournamentState) => void;
};

export type TournamentContextProviderProps = {
    children: React.ReactNode;
};
