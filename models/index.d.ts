import {
    ModelInit,
    MutableModel,
    PersistentModelConstructor,
} from "@aws-amplify/datastore";

type UserMetaData = {
    readOnlyFields: "createdAt" | "updatedAt";
};

type TournamentMetaData = {
    readOnlyFields: "createdAt" | "updatedAt";
};

type MatchMetaData = {
    readOnlyFields: "createdAt" | "updatedAt";
};

type TeamMetaData = {
    readOnlyFields: "createdAt" | "updatedAt";
};

type GuessMetaData = {
    readOnlyFields: "createdAt" | "updatedAt";
};

type UserTournamentMetaData = {
    readOnlyFields: "createdAt" | "updatedAt";
};

export declare class User {
    readonly id: string;
    readonly cognitoID: string;
    readonly email: string;
    readonly name: string;
    readonly wins: number;
    readonly ownedTournaments?: (Tournament | null)[] | null;
    readonly joinedTournaments?: (UserTournament | null)[] | null;
    readonly image?: string | null;
    readonly createdAt?: string | null;
    readonly updatedAt?: string | null;
    constructor(init: ModelInit<User, UserMetaData>);
    static copyOf(
        source: User,
        mutator: (
            draft: MutableModel<User, UserMetaData>
        ) => MutableModel<User, UserMetaData> | void
    ): User;
}

export declare class Tournament {
    readonly id: string;
    readonly name: string;
    readonly description: string;
    readonly startDate: string;
    readonly endDate: string;
    readonly tournamentOwner: User;
    readonly userID: string;
    readonly participants?: (UserTournament | null)[] | null;
    readonly matches?: (Match | null)[] | null;
    readonly image?: string | null;
    readonly teams?: (Team | null)[] | null;
    readonly createdAt?: string | null;
    readonly updatedAt?: string | null;
    constructor(init: ModelInit<Tournament, TournamentMetaData>);
    static copyOf(
        source: Tournament,
        mutator: (
            draft: MutableModel<Tournament, TournamentMetaData>
        ) => MutableModel<Tournament, TournamentMetaData> | void
    ): Tournament;
}

export declare class Match {
    readonly id: string;
    readonly homeTeam: Team;
    readonly homeTeamScore?: number | null;
    readonly awayTeamScore?: number | null;
    readonly awayTeam: Team;
    readonly tournamentID: string;
    readonly Guesses?: (Guess | null)[] | null;
    readonly createdAt?: string | null;
    readonly updatedAt?: string | null;
    readonly matchHomeTeamId: string;
    readonly matchAwayTeamId: string;
    constructor(init: ModelInit<Match, MatchMetaData>);
    static copyOf(
        source: Match,
        mutator: (
            draft: MutableModel<Match, MatchMetaData>
        ) => MutableModel<Match, MatchMetaData> | void
    ): Match;
}

export declare class Team {
    readonly id: string;
    readonly name: string;
    readonly tournamentID: string;
    readonly image?: string | null;
    readonly createdAt?: string | null;
    readonly updatedAt?: string | null;
    constructor(init: ModelInit<Team, TeamMetaData>);
    static copyOf(
        source: Team,
        mutator: (
            draft: MutableModel<Team, TeamMetaData>
        ) => MutableModel<Team, TeamMetaData> | void
    ): Team;
}

export declare class Guess {
    readonly id: string;
    readonly matchID: string;
    readonly user: User;
    readonly homeTeamScoreGuess?: number | null;
    readonly awayTeamScoreGuess?: number | null;
    readonly createdAt?: string | null;
    readonly updatedAt?: string | null;
    readonly guessUserId: string;
    constructor(init: ModelInit<Guess, GuessMetaData>);
    static copyOf(
        source: Guess,
        mutator: (
            draft: MutableModel<Guess, GuessMetaData>
        ) => MutableModel<Guess, GuessMetaData> | void
    ): Guess;
}

export declare class UserTournament {
    readonly id: string;
    readonly user: User;
    readonly tournament: Tournament;
    readonly createdAt?: string | null;
    readonly updatedAt?: string | null;
    constructor(init: ModelInit<UserTournament, UserTournamentMetaData>);
    static copyOf(
        source: UserTournament,
        mutator: (
            draft: MutableModel<UserTournament, UserTournamentMetaData>
        ) => MutableModel<UserTournament, UserTournamentMetaData> | void
    ): UserTournament;
}
