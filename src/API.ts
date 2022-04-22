/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
    id?: string | null;
    cognitoID: string;
    email: string;
    name: string;
    wins: number;
    image?: string | null;
    _version?: number | null;
};

export type ModelUserConditionInput = {
    cognitoID?: ModelStringInput | null;
    name?: ModelStringInput | null;
    wins?: ModelIntInput | null;
    image?: ModelStringInput | null;
    and?: Array<ModelUserConditionInput | null> | null;
    or?: Array<ModelUserConditionInput | null> | null;
    not?: ModelUserConditionInput | null;
};

export type ModelStringInput = {
    ne?: string | null;
    eq?: string | null;
    le?: string | null;
    lt?: string | null;
    ge?: string | null;
    gt?: string | null;
    contains?: string | null;
    notContains?: string | null;
    between?: Array<string | null> | null;
    beginsWith?: string | null;
    attributeExists?: boolean | null;
    attributeType?: ModelAttributeTypes | null;
    size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
    binary = "binary",
    binarySet = "binarySet",
    bool = "bool",
    list = "list",
    map = "map",
    number = "number",
    numberSet = "numberSet",
    string = "string",
    stringSet = "stringSet",
    _null = "_null",
}

export type ModelSizeInput = {
    ne?: number | null;
    eq?: number | null;
    le?: number | null;
    lt?: number | null;
    ge?: number | null;
    gt?: number | null;
    between?: Array<number | null> | null;
};

export type ModelIntInput = {
    ne?: number | null;
    eq?: number | null;
    le?: number | null;
    lt?: number | null;
    ge?: number | null;
    gt?: number | null;
    between?: Array<number | null> | null;
    attributeExists?: boolean | null;
    attributeType?: ModelAttributeTypes | null;
};

export type User = {
    __typename: "User";
    id: string;
    cognitoID: string;
    email: string;
    name: string;
    wins: number;
    ownedTournaments?: ModelTournamentConnection | null;
    joinedTournaments?: ModelUserTournamentConnection | null;
    image?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
};

export type ModelTournamentConnection = {
    __typename: "ModelTournamentConnection";
    items: Array<Tournament | null>;
    nextToken?: string | null;
    startedAt?: number | null;
};

export type Tournament = {
    __typename: "Tournament";
    id: string;
    name: string;
    description: string;
    startDate: string;
    endDate: string;
    tournamentOwner: User;
    userID: string;
    participants?: ModelUserTournamentConnection | null;
    matches?: ModelMatchConnection | null;
    image?: string | null;
    teams?: ModelTeamConnection | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
};

export type ModelUserTournamentConnection = {
    __typename: "ModelUserTournamentConnection";
    items: Array<UserTournament | null>;
    nextToken?: string | null;
    startedAt?: number | null;
};

export type UserTournament = {
    __typename: "UserTournament";
    id: string;
    userID: string;
    tournamentID: string;
    user: User;
    tournament: Tournament;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
};

export type ModelMatchConnection = {
    __typename: "ModelMatchConnection";
    items: Array<Match | null>;
    nextToken?: string | null;
    startedAt?: number | null;
};

export type Match = {
    __typename: "Match";
    id: string;
    homeTeam: Team;
    homeTeamScore?: number | null;
    awayTeamScore?: number | null;
    awayTeam: Team;
    tournamentID: string;
    Guesses?: ModelGuessConnection | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    matchHomeTeamId: string;
    matchAwayTeamId: string;
    owner?: string | null;
};

export type Team = {
    __typename: "Team";
    id: string;
    name: string;
    tournamentID: string;
    image?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
};

export type ModelGuessConnection = {
    __typename: "ModelGuessConnection";
    items: Array<Guess | null>;
    nextToken?: string | null;
    startedAt?: number | null;
};

export type Guess = {
    __typename: "Guess";
    id: string;
    matchID: string;
    user: User;
    homeTeamScoreGuess?: number | null;
    awayTeamScoreGuess?: number | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    guessUserId: string;
    owner?: string | null;
};

export type ModelTeamConnection = {
    __typename: "ModelTeamConnection";
    items: Array<Team | null>;
    nextToken?: string | null;
    startedAt?: number | null;
};

export type UpdateUserInput = {
    id?: string | null;
    cognitoID?: string | null;
    email: string;
    name?: string | null;
    wins?: number | null;
    image?: string | null;
    _version?: number | null;
};

export type DeleteUserInput = {
    email: string;
    _version?: number | null;
};

export type CreateTournamentInput = {
    id?: string | null;
    name: string;
    description: string;
    startDate: string;
    endDate: string;
    userID: string;
    image?: string | null;
    _version?: number | null;
};

export type ModelTournamentConditionInput = {
    name?: ModelStringInput | null;
    description?: ModelStringInput | null;
    startDate?: ModelStringInput | null;
    endDate?: ModelStringInput | null;
    userID?: ModelIDInput | null;
    image?: ModelStringInput | null;
    and?: Array<ModelTournamentConditionInput | null> | null;
    or?: Array<ModelTournamentConditionInput | null> | null;
    not?: ModelTournamentConditionInput | null;
};

export type ModelIDInput = {
    ne?: string | null;
    eq?: string | null;
    le?: string | null;
    lt?: string | null;
    ge?: string | null;
    gt?: string | null;
    contains?: string | null;
    notContains?: string | null;
    between?: Array<string | null> | null;
    beginsWith?: string | null;
    attributeExists?: boolean | null;
    attributeType?: ModelAttributeTypes | null;
    size?: ModelSizeInput | null;
};

export type UpdateTournamentInput = {
    id: string;
    name?: string | null;
    description?: string | null;
    startDate?: string | null;
    endDate?: string | null;
    userID?: string | null;
    image?: string | null;
    _version?: number | null;
};

export type DeleteTournamentInput = {
    id: string;
    _version?: number | null;
};

export type CreateGuessInput = {
    id?: string | null;
    matchID: string;
    homeTeamScoreGuess?: number | null;
    awayTeamScoreGuess?: number | null;
    _version?: number | null;
    guessUserId: string;
};

export type ModelGuessConditionInput = {
    matchID?: ModelIDInput | null;
    homeTeamScoreGuess?: ModelIntInput | null;
    awayTeamScoreGuess?: ModelIntInput | null;
    and?: Array<ModelGuessConditionInput | null> | null;
    or?: Array<ModelGuessConditionInput | null> | null;
    not?: ModelGuessConditionInput | null;
    guessUserId?: ModelIDInput | null;
};

export type UpdateGuessInput = {
    id: string;
    matchID?: string | null;
    homeTeamScoreGuess?: number | null;
    awayTeamScoreGuess?: number | null;
    _version?: number | null;
    guessUserId?: string | null;
};

export type DeleteGuessInput = {
    id: string;
    _version?: number | null;
};

export type CreateTeamInput = {
    id?: string | null;
    name: string;
    tournamentID: string;
    image?: string | null;
    _version?: number | null;
};

export type ModelTeamConditionInput = {
    name?: ModelStringInput | null;
    tournamentID?: ModelIDInput | null;
    image?: ModelStringInput | null;
    and?: Array<ModelTeamConditionInput | null> | null;
    or?: Array<ModelTeamConditionInput | null> | null;
    not?: ModelTeamConditionInput | null;
};

export type UpdateTeamInput = {
    id: string;
    name?: string | null;
    tournamentID?: string | null;
    image?: string | null;
    _version?: number | null;
};

export type DeleteTeamInput = {
    id: string;
    _version?: number | null;
};

export type CreateMatchInput = {
    id?: string | null;
    homeTeamScore?: number | null;
    awayTeamScore?: number | null;
    tournamentID: string;
    _version?: number | null;
    matchHomeTeamId: string;
    matchAwayTeamId: string;
};

export type ModelMatchConditionInput = {
    homeTeamScore?: ModelIntInput | null;
    awayTeamScore?: ModelIntInput | null;
    tournamentID?: ModelIDInput | null;
    and?: Array<ModelMatchConditionInput | null> | null;
    or?: Array<ModelMatchConditionInput | null> | null;
    not?: ModelMatchConditionInput | null;
    matchHomeTeamId?: ModelIDInput | null;
    matchAwayTeamId?: ModelIDInput | null;
};

export type UpdateMatchInput = {
    id: string;
    homeTeamScore?: number | null;
    awayTeamScore?: number | null;
    tournamentID?: string | null;
    _version?: number | null;
    matchHomeTeamId?: string | null;
    matchAwayTeamId?: string | null;
};

export type DeleteMatchInput = {
    id: string;
    _version?: number | null;
};

export type CreateUserTournamentInput = {
    id?: string | null;
    userID: string;
    tournamentID: string;
    _version?: number | null;
};

export type ModelUserTournamentConditionInput = {
    userID?: ModelStringInput | null;
    tournamentID?: ModelIDInput | null;
    and?: Array<ModelUserTournamentConditionInput | null> | null;
    or?: Array<ModelUserTournamentConditionInput | null> | null;
    not?: ModelUserTournamentConditionInput | null;
};

export type UpdateUserTournamentInput = {
    id: string;
    userID?: string | null;
    tournamentID?: string | null;
    _version?: number | null;
};

export type DeleteUserTournamentInput = {
    id: string;
    _version?: number | null;
};

export type ModelUserFilterInput = {
    id?: ModelIDInput | null;
    cognitoID?: ModelStringInput | null;
    email?: ModelStringInput | null;
    name?: ModelStringInput | null;
    wins?: ModelIntInput | null;
    image?: ModelStringInput | null;
    and?: Array<ModelUserFilterInput | null> | null;
    or?: Array<ModelUserFilterInput | null> | null;
    not?: ModelUserFilterInput | null;
};

export enum ModelSortDirection {
    ASC = "ASC",
    DESC = "DESC",
}

export type ModelUserConnection = {
    __typename: "ModelUserConnection";
    items: Array<User | null>;
    nextToken?: string | null;
    startedAt?: number | null;
};

export type ModelTournamentFilterInput = {
    id?: ModelIDInput | null;
    name?: ModelStringInput | null;
    description?: ModelStringInput | null;
    startDate?: ModelStringInput | null;
    endDate?: ModelStringInput | null;
    userID?: ModelIDInput | null;
    image?: ModelStringInput | null;
    and?: Array<ModelTournamentFilterInput | null> | null;
    or?: Array<ModelTournamentFilterInput | null> | null;
    not?: ModelTournamentFilterInput | null;
};

export type ModelGuessFilterInput = {
    id?: ModelIDInput | null;
    matchID?: ModelIDInput | null;
    homeTeamScoreGuess?: ModelIntInput | null;
    awayTeamScoreGuess?: ModelIntInput | null;
    and?: Array<ModelGuessFilterInput | null> | null;
    or?: Array<ModelGuessFilterInput | null> | null;
    not?: ModelGuessFilterInput | null;
    guessUserId?: ModelIDInput | null;
};

export type ModelTeamFilterInput = {
    id?: ModelIDInput | null;
    name?: ModelStringInput | null;
    tournamentID?: ModelIDInput | null;
    image?: ModelStringInput | null;
    and?: Array<ModelTeamFilterInput | null> | null;
    or?: Array<ModelTeamFilterInput | null> | null;
    not?: ModelTeamFilterInput | null;
};

export type ModelMatchFilterInput = {
    id?: ModelIDInput | null;
    homeTeamScore?: ModelIntInput | null;
    awayTeamScore?: ModelIntInput | null;
    tournamentID?: ModelIDInput | null;
    and?: Array<ModelMatchFilterInput | null> | null;
    or?: Array<ModelMatchFilterInput | null> | null;
    not?: ModelMatchFilterInput | null;
    matchHomeTeamId?: ModelIDInput | null;
    matchAwayTeamId?: ModelIDInput | null;
};

export type ModelUserTournamentFilterInput = {
    id?: ModelIDInput | null;
    userID?: ModelStringInput | null;
    tournamentID?: ModelIDInput | null;
    and?: Array<ModelUserTournamentFilterInput | null> | null;
    or?: Array<ModelUserTournamentFilterInput | null> | null;
    not?: ModelUserTournamentFilterInput | null;
};

export type CreateUserMutationVariables = {
    input: CreateUserInput;
    condition?: ModelUserConditionInput | null;
};

export type CreateUserMutation = {
    createUser?: {
        __typename: "User";
        id: string;
        cognitoID: string;
        email: string;
        name: string;
        wins: number;
        ownedTournaments?: {
            __typename: "ModelTournamentConnection";
            items: Array<{
                __typename: "Tournament";
                id: string;
                name: string;
                description: string;
                startDate: string;
                endDate: string;
                userID: string;
                image?: string | null;
                createdAt: string;
                updatedAt: string;
                _version: number;
                _deleted?: boolean | null;
                _lastChangedAt: number;
                owner?: string | null;
            } | null>;
            nextToken?: string | null;
            startedAt?: number | null;
        } | null;
        joinedTournaments?: {
            __typename: "ModelUserTournamentConnection";
            items: Array<{
                __typename: "UserTournament";
                id: string;
                userID: string;
                tournamentID: string;
                createdAt: string;
                updatedAt: string;
                _version: number;
                _deleted?: boolean | null;
                _lastChangedAt: number;
                owner?: string | null;
            } | null>;
            nextToken?: string | null;
            startedAt?: number | null;
        } | null;
        image?: string | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
    } | null;
};

export type UpdateUserMutationVariables = {
    input: UpdateUserInput;
    condition?: ModelUserConditionInput | null;
};

export type UpdateUserMutation = {
    updateUser?: {
        __typename: "User";
        id: string;
        cognitoID: string;
        email: string;
        name: string;
        wins: number;
        ownedTournaments?: {
            __typename: "ModelTournamentConnection";
            items: Array<{
                __typename: "Tournament";
                id: string;
                name: string;
                description: string;
                startDate: string;
                endDate: string;
                userID: string;
                image?: string | null;
                createdAt: string;
                updatedAt: string;
                _version: number;
                _deleted?: boolean | null;
                _lastChangedAt: number;
                owner?: string | null;
            } | null>;
            nextToken?: string | null;
            startedAt?: number | null;
        } | null;
        joinedTournaments?: {
            __typename: "ModelUserTournamentConnection";
            items: Array<{
                __typename: "UserTournament";
                id: string;
                userID: string;
                tournamentID: string;
                createdAt: string;
                updatedAt: string;
                _version: number;
                _deleted?: boolean | null;
                _lastChangedAt: number;
                owner?: string | null;
            } | null>;
            nextToken?: string | null;
            startedAt?: number | null;
        } | null;
        image?: string | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
    } | null;
};

export type DeleteUserMutationVariables = {
    input: DeleteUserInput;
    condition?: ModelUserConditionInput | null;
};

export type DeleteUserMutation = {
    deleteUser?: {
        __typename: "User";
        id: string;
        cognitoID: string;
        email: string;
        name: string;
        wins: number;
        ownedTournaments?: {
            __typename: "ModelTournamentConnection";
            items: Array<{
                __typename: "Tournament";
                id: string;
                name: string;
                description: string;
                startDate: string;
                endDate: string;
                userID: string;
                image?: string | null;
                createdAt: string;
                updatedAt: string;
                _version: number;
                _deleted?: boolean | null;
                _lastChangedAt: number;
                owner?: string | null;
            } | null>;
            nextToken?: string | null;
            startedAt?: number | null;
        } | null;
        joinedTournaments?: {
            __typename: "ModelUserTournamentConnection";
            items: Array<{
                __typename: "UserTournament";
                id: string;
                userID: string;
                tournamentID: string;
                createdAt: string;
                updatedAt: string;
                _version: number;
                _deleted?: boolean | null;
                _lastChangedAt: number;
                owner?: string | null;
            } | null>;
            nextToken?: string | null;
            startedAt?: number | null;
        } | null;
        image?: string | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
    } | null;
};

export type CreateTournamentMutationVariables = {
    input: CreateTournamentInput;
    condition?: ModelTournamentConditionInput | null;
};

export type CreateTournamentMutation = {
    createTournament?: {
        __typename: "Tournament";
        id: string;
        name: string;
        description: string;
        startDate: string;
        endDate: string;
        tournamentOwner: {
            __typename: "User";
            id: string;
            cognitoID: string;
            email: string;
            name: string;
            wins: number;
            ownedTournaments?: {
                __typename: "ModelTournamentConnection";
                nextToken?: string | null;
                startedAt?: number | null;
            } | null;
            joinedTournaments?: {
                __typename: "ModelUserTournamentConnection";
                nextToken?: string | null;
                startedAt?: number | null;
            } | null;
            image?: string | null;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
            owner?: string | null;
        };
        userID: string;
        participants?: {
            __typename: "ModelUserTournamentConnection";
            items: Array<{
                __typename: "UserTournament";
                id: string;
                userID: string;
                tournamentID: string;
                createdAt: string;
                updatedAt: string;
                _version: number;
                _deleted?: boolean | null;
                _lastChangedAt: number;
                owner?: string | null;
            } | null>;
            nextToken?: string | null;
            startedAt?: number | null;
        } | null;
        matches?: {
            __typename: "ModelMatchConnection";
            items: Array<{
                __typename: "Match";
                id: string;
                homeTeamScore?: number | null;
                awayTeamScore?: number | null;
                tournamentID: string;
                createdAt: string;
                updatedAt: string;
                _version: number;
                _deleted?: boolean | null;
                _lastChangedAt: number;
                matchHomeTeamId: string;
                matchAwayTeamId: string;
                owner?: string | null;
            } | null>;
            nextToken?: string | null;
            startedAt?: number | null;
        } | null;
        image?: string | null;
        teams?: {
            __typename: "ModelTeamConnection";
            items: Array<{
                __typename: "Team";
                id: string;
                name: string;
                tournamentID: string;
                image?: string | null;
                createdAt: string;
                updatedAt: string;
                _version: number;
                _deleted?: boolean | null;
                _lastChangedAt: number;
                owner?: string | null;
            } | null>;
            nextToken?: string | null;
            startedAt?: number | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
    } | null;
};

export type UpdateTournamentMutationVariables = {
    input: UpdateTournamentInput;
    condition?: ModelTournamentConditionInput | null;
};

export type UpdateTournamentMutation = {
    updateTournament?: {
        __typename: "Tournament";
        id: string;
        name: string;
        description: string;
        startDate: string;
        endDate: string;
        tournamentOwner: {
            __typename: "User";
            id: string;
            cognitoID: string;
            email: string;
            name: string;
            wins: number;
            ownedTournaments?: {
                __typename: "ModelTournamentConnection";
                nextToken?: string | null;
                startedAt?: number | null;
            } | null;
            joinedTournaments?: {
                __typename: "ModelUserTournamentConnection";
                nextToken?: string | null;
                startedAt?: number | null;
            } | null;
            image?: string | null;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
            owner?: string | null;
        };
        userID: string;
        participants?: {
            __typename: "ModelUserTournamentConnection";
            items: Array<{
                __typename: "UserTournament";
                id: string;
                userID: string;
                tournamentID: string;
                createdAt: string;
                updatedAt: string;
                _version: number;
                _deleted?: boolean | null;
                _lastChangedAt: number;
                owner?: string | null;
            } | null>;
            nextToken?: string | null;
            startedAt?: number | null;
        } | null;
        matches?: {
            __typename: "ModelMatchConnection";
            items: Array<{
                __typename: "Match";
                id: string;
                homeTeamScore?: number | null;
                awayTeamScore?: number | null;
                tournamentID: string;
                createdAt: string;
                updatedAt: string;
                _version: number;
                _deleted?: boolean | null;
                _lastChangedAt: number;
                matchHomeTeamId: string;
                matchAwayTeamId: string;
                owner?: string | null;
            } | null>;
            nextToken?: string | null;
            startedAt?: number | null;
        } | null;
        image?: string | null;
        teams?: {
            __typename: "ModelTeamConnection";
            items: Array<{
                __typename: "Team";
                id: string;
                name: string;
                tournamentID: string;
                image?: string | null;
                createdAt: string;
                updatedAt: string;
                _version: number;
                _deleted?: boolean | null;
                _lastChangedAt: number;
                owner?: string | null;
            } | null>;
            nextToken?: string | null;
            startedAt?: number | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
    } | null;
};

export type DeleteTournamentMutationVariables = {
    input: DeleteTournamentInput;
    condition?: ModelTournamentConditionInput | null;
};

export type DeleteTournamentMutation = {
    deleteTournament?: {
        __typename: "Tournament";
        id: string;
        name: string;
        description: string;
        startDate: string;
        endDate: string;
        tournamentOwner: {
            __typename: "User";
            id: string;
            cognitoID: string;
            email: string;
            name: string;
            wins: number;
            ownedTournaments?: {
                __typename: "ModelTournamentConnection";
                nextToken?: string | null;
                startedAt?: number | null;
            } | null;
            joinedTournaments?: {
                __typename: "ModelUserTournamentConnection";
                nextToken?: string | null;
                startedAt?: number | null;
            } | null;
            image?: string | null;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
            owner?: string | null;
        };
        userID: string;
        participants?: {
            __typename: "ModelUserTournamentConnection";
            items: Array<{
                __typename: "UserTournament";
                id: string;
                userID: string;
                tournamentID: string;
                createdAt: string;
                updatedAt: string;
                _version: number;
                _deleted?: boolean | null;
                _lastChangedAt: number;
                owner?: string | null;
            } | null>;
            nextToken?: string | null;
            startedAt?: number | null;
        } | null;
        matches?: {
            __typename: "ModelMatchConnection";
            items: Array<{
                __typename: "Match";
                id: string;
                homeTeamScore?: number | null;
                awayTeamScore?: number | null;
                tournamentID: string;
                createdAt: string;
                updatedAt: string;
                _version: number;
                _deleted?: boolean | null;
                _lastChangedAt: number;
                matchHomeTeamId: string;
                matchAwayTeamId: string;
                owner?: string | null;
            } | null>;
            nextToken?: string | null;
            startedAt?: number | null;
        } | null;
        image?: string | null;
        teams?: {
            __typename: "ModelTeamConnection";
            items: Array<{
                __typename: "Team";
                id: string;
                name: string;
                tournamentID: string;
                image?: string | null;
                createdAt: string;
                updatedAt: string;
                _version: number;
                _deleted?: boolean | null;
                _lastChangedAt: number;
                owner?: string | null;
            } | null>;
            nextToken?: string | null;
            startedAt?: number | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
    } | null;
};

export type CreateGuessMutationVariables = {
    input: CreateGuessInput;
    condition?: ModelGuessConditionInput | null;
};

export type CreateGuessMutation = {
    createGuess?: {
        __typename: "Guess";
        id: string;
        matchID: string;
        user: {
            __typename: "User";
            id: string;
            cognitoID: string;
            email: string;
            name: string;
            wins: number;
            ownedTournaments?: {
                __typename: "ModelTournamentConnection";
                nextToken?: string | null;
                startedAt?: number | null;
            } | null;
            joinedTournaments?: {
                __typename: "ModelUserTournamentConnection";
                nextToken?: string | null;
                startedAt?: number | null;
            } | null;
            image?: string | null;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
            owner?: string | null;
        };
        homeTeamScoreGuess?: number | null;
        awayTeamScoreGuess?: number | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        guessUserId: string;
        owner?: string | null;
    } | null;
};

export type UpdateGuessMutationVariables = {
    input: UpdateGuessInput;
    condition?: ModelGuessConditionInput | null;
};

export type UpdateGuessMutation = {
    updateGuess?: {
        __typename: "Guess";
        id: string;
        matchID: string;
        user: {
            __typename: "User";
            id: string;
            cognitoID: string;
            email: string;
            name: string;
            wins: number;
            ownedTournaments?: {
                __typename: "ModelTournamentConnection";
                nextToken?: string | null;
                startedAt?: number | null;
            } | null;
            joinedTournaments?: {
                __typename: "ModelUserTournamentConnection";
                nextToken?: string | null;
                startedAt?: number | null;
            } | null;
            image?: string | null;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
            owner?: string | null;
        };
        homeTeamScoreGuess?: number | null;
        awayTeamScoreGuess?: number | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        guessUserId: string;
        owner?: string | null;
    } | null;
};

export type DeleteGuessMutationVariables = {
    input: DeleteGuessInput;
    condition?: ModelGuessConditionInput | null;
};

export type DeleteGuessMutation = {
    deleteGuess?: {
        __typename: "Guess";
        id: string;
        matchID: string;
        user: {
            __typename: "User";
            id: string;
            cognitoID: string;
            email: string;
            name: string;
            wins: number;
            ownedTournaments?: {
                __typename: "ModelTournamentConnection";
                nextToken?: string | null;
                startedAt?: number | null;
            } | null;
            joinedTournaments?: {
                __typename: "ModelUserTournamentConnection";
                nextToken?: string | null;
                startedAt?: number | null;
            } | null;
            image?: string | null;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
            owner?: string | null;
        };
        homeTeamScoreGuess?: number | null;
        awayTeamScoreGuess?: number | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        guessUserId: string;
        owner?: string | null;
    } | null;
};

export type CreateTeamMutationVariables = {
    input: CreateTeamInput;
    condition?: ModelTeamConditionInput | null;
};

export type CreateTeamMutation = {
    createTeam?: {
        __typename: "Team";
        id: string;
        name: string;
        tournamentID: string;
        image?: string | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
    } | null;
};

export type UpdateTeamMutationVariables = {
    input: UpdateTeamInput;
    condition?: ModelTeamConditionInput | null;
};

export type UpdateTeamMutation = {
    updateTeam?: {
        __typename: "Team";
        id: string;
        name: string;
        tournamentID: string;
        image?: string | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
    } | null;
};

export type DeleteTeamMutationVariables = {
    input: DeleteTeamInput;
    condition?: ModelTeamConditionInput | null;
};

export type DeleteTeamMutation = {
    deleteTeam?: {
        __typename: "Team";
        id: string;
        name: string;
        tournamentID: string;
        image?: string | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
    } | null;
};

export type CreateMatchMutationVariables = {
    input: CreateMatchInput;
    condition?: ModelMatchConditionInput | null;
};

export type CreateMatchMutation = {
    createMatch?: {
        __typename: "Match";
        id: string;
        homeTeam: {
            __typename: "Team";
            id: string;
            name: string;
            tournamentID: string;
            image?: string | null;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
            owner?: string | null;
        };
        homeTeamScore?: number | null;
        awayTeamScore?: number | null;
        awayTeam: {
            __typename: "Team";
            id: string;
            name: string;
            tournamentID: string;
            image?: string | null;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
            owner?: string | null;
        };
        tournamentID: string;
        Guesses?: {
            __typename: "ModelGuessConnection";
            items: Array<{
                __typename: "Guess";
                id: string;
                matchID: string;
                homeTeamScoreGuess?: number | null;
                awayTeamScoreGuess?: number | null;
                createdAt: string;
                updatedAt: string;
                _version: number;
                _deleted?: boolean | null;
                _lastChangedAt: number;
                guessUserId: string;
                owner?: string | null;
            } | null>;
            nextToken?: string | null;
            startedAt?: number | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        matchHomeTeamId: string;
        matchAwayTeamId: string;
        owner?: string | null;
    } | null;
};

export type UpdateMatchMutationVariables = {
    input: UpdateMatchInput;
    condition?: ModelMatchConditionInput | null;
};

export type UpdateMatchMutation = {
    updateMatch?: {
        __typename: "Match";
        id: string;
        homeTeam: {
            __typename: "Team";
            id: string;
            name: string;
            tournamentID: string;
            image?: string | null;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
            owner?: string | null;
        };
        homeTeamScore?: number | null;
        awayTeamScore?: number | null;
        awayTeam: {
            __typename: "Team";
            id: string;
            name: string;
            tournamentID: string;
            image?: string | null;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
            owner?: string | null;
        };
        tournamentID: string;
        Guesses?: {
            __typename: "ModelGuessConnection";
            items: Array<{
                __typename: "Guess";
                id: string;
                matchID: string;
                homeTeamScoreGuess?: number | null;
                awayTeamScoreGuess?: number | null;
                createdAt: string;
                updatedAt: string;
                _version: number;
                _deleted?: boolean | null;
                _lastChangedAt: number;
                guessUserId: string;
                owner?: string | null;
            } | null>;
            nextToken?: string | null;
            startedAt?: number | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        matchHomeTeamId: string;
        matchAwayTeamId: string;
        owner?: string | null;
    } | null;
};

export type DeleteMatchMutationVariables = {
    input: DeleteMatchInput;
    condition?: ModelMatchConditionInput | null;
};

export type DeleteMatchMutation = {
    deleteMatch?: {
        __typename: "Match";
        id: string;
        homeTeam: {
            __typename: "Team";
            id: string;
            name: string;
            tournamentID: string;
            image?: string | null;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
            owner?: string | null;
        };
        homeTeamScore?: number | null;
        awayTeamScore?: number | null;
        awayTeam: {
            __typename: "Team";
            id: string;
            name: string;
            tournamentID: string;
            image?: string | null;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
            owner?: string | null;
        };
        tournamentID: string;
        Guesses?: {
            __typename: "ModelGuessConnection";
            items: Array<{
                __typename: "Guess";
                id: string;
                matchID: string;
                homeTeamScoreGuess?: number | null;
                awayTeamScoreGuess?: number | null;
                createdAt: string;
                updatedAt: string;
                _version: number;
                _deleted?: boolean | null;
                _lastChangedAt: number;
                guessUserId: string;
                owner?: string | null;
            } | null>;
            nextToken?: string | null;
            startedAt?: number | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        matchHomeTeamId: string;
        matchAwayTeamId: string;
        owner?: string | null;
    } | null;
};

export type CreateUserTournamentMutationVariables = {
    input: CreateUserTournamentInput;
    condition?: ModelUserTournamentConditionInput | null;
};

export type CreateUserTournamentMutation = {
    createUserTournament?: {
        __typename: "UserTournament";
        id: string;
        userID: string;
        tournamentID: string;
        user: {
            __typename: "User";
            id: string;
            cognitoID: string;
            email: string;
            name: string;
            wins: number;
            ownedTournaments?: {
                __typename: "ModelTournamentConnection";
                nextToken?: string | null;
                startedAt?: number | null;
            } | null;
            joinedTournaments?: {
                __typename: "ModelUserTournamentConnection";
                nextToken?: string | null;
                startedAt?: number | null;
            } | null;
            image?: string | null;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
            owner?: string | null;
        };
        tournament: {
            __typename: "Tournament";
            id: string;
            name: string;
            description: string;
            startDate: string;
            endDate: string;
            tournamentOwner: {
                __typename: "User";
                id: string;
                cognitoID: string;
                email: string;
                name: string;
                wins: number;
                image?: string | null;
                createdAt: string;
                updatedAt: string;
                _version: number;
                _deleted?: boolean | null;
                _lastChangedAt: number;
                owner?: string | null;
            };
            userID: string;
            participants?: {
                __typename: "ModelUserTournamentConnection";
                nextToken?: string | null;
                startedAt?: number | null;
            } | null;
            matches?: {
                __typename: "ModelMatchConnection";
                nextToken?: string | null;
                startedAt?: number | null;
            } | null;
            image?: string | null;
            teams?: {
                __typename: "ModelTeamConnection";
                nextToken?: string | null;
                startedAt?: number | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
            owner?: string | null;
        };
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
    } | null;
};

export type UpdateUserTournamentMutationVariables = {
    input: UpdateUserTournamentInput;
    condition?: ModelUserTournamentConditionInput | null;
};

export type UpdateUserTournamentMutation = {
    updateUserTournament?: {
        __typename: "UserTournament";
        id: string;
        userID: string;
        tournamentID: string;
        user: {
            __typename: "User";
            id: string;
            cognitoID: string;
            email: string;
            name: string;
            wins: number;
            ownedTournaments?: {
                __typename: "ModelTournamentConnection";
                nextToken?: string | null;
                startedAt?: number | null;
            } | null;
            joinedTournaments?: {
                __typename: "ModelUserTournamentConnection";
                nextToken?: string | null;
                startedAt?: number | null;
            } | null;
            image?: string | null;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
            owner?: string | null;
        };
        tournament: {
            __typename: "Tournament";
            id: string;
            name: string;
            description: string;
            startDate: string;
            endDate: string;
            tournamentOwner: {
                __typename: "User";
                id: string;
                cognitoID: string;
                email: string;
                name: string;
                wins: number;
                image?: string | null;
                createdAt: string;
                updatedAt: string;
                _version: number;
                _deleted?: boolean | null;
                _lastChangedAt: number;
                owner?: string | null;
            };
            userID: string;
            participants?: {
                __typename: "ModelUserTournamentConnection";
                nextToken?: string | null;
                startedAt?: number | null;
            } | null;
            matches?: {
                __typename: "ModelMatchConnection";
                nextToken?: string | null;
                startedAt?: number | null;
            } | null;
            image?: string | null;
            teams?: {
                __typename: "ModelTeamConnection";
                nextToken?: string | null;
                startedAt?: number | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
            owner?: string | null;
        };
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
    } | null;
};

export type DeleteUserTournamentMutationVariables = {
    input: DeleteUserTournamentInput;
    condition?: ModelUserTournamentConditionInput | null;
};

export type DeleteUserTournamentMutation = {
    deleteUserTournament?: {
        __typename: "UserTournament";
        id: string;
        userID: string;
        tournamentID: string;
        user: {
            __typename: "User";
            id: string;
            cognitoID: string;
            email: string;
            name: string;
            wins: number;
            ownedTournaments?: {
                __typename: "ModelTournamentConnection";
                nextToken?: string | null;
                startedAt?: number | null;
            } | null;
            joinedTournaments?: {
                __typename: "ModelUserTournamentConnection";
                nextToken?: string | null;
                startedAt?: number | null;
            } | null;
            image?: string | null;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
            owner?: string | null;
        };
        tournament: {
            __typename: "Tournament";
            id: string;
            name: string;
            description: string;
            startDate: string;
            endDate: string;
            tournamentOwner: {
                __typename: "User";
                id: string;
                cognitoID: string;
                email: string;
                name: string;
                wins: number;
                image?: string | null;
                createdAt: string;
                updatedAt: string;
                _version: number;
                _deleted?: boolean | null;
                _lastChangedAt: number;
                owner?: string | null;
            };
            userID: string;
            participants?: {
                __typename: "ModelUserTournamentConnection";
                nextToken?: string | null;
                startedAt?: number | null;
            } | null;
            matches?: {
                __typename: "ModelMatchConnection";
                nextToken?: string | null;
                startedAt?: number | null;
            } | null;
            image?: string | null;
            teams?: {
                __typename: "ModelTeamConnection";
                nextToken?: string | null;
                startedAt?: number | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
            owner?: string | null;
        };
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
    } | null;
};

export type GetUserQueryVariables = {
    email: string;
};

export type GetUserQuery = {
    getUser?: {
        __typename: "User";
        id: string;
        cognitoID: string;
        email: string;
        name: string;
        wins: number;
        ownedTournaments?: {
            __typename: "ModelTournamentConnection";
            items: Array<{
                __typename: "Tournament";
                id: string;
                name: string;
                description: string;
                startDate: string;
                endDate: string;
                userID: string;
                image?: string | null;
                createdAt: string;
                updatedAt: string;
                _version: number;
                _deleted?: boolean | null;
                _lastChangedAt: number;
                owner?: string | null;
            } | null>;
            nextToken?: string | null;
            startedAt?: number | null;
        } | null;
        joinedTournaments?: {
            __typename: "ModelUserTournamentConnection";
            items: Array<{
                __typename: "UserTournament";
                id: string;
                userID: string;
                tournamentID: string;
                createdAt: string;
                updatedAt: string;
                _version: number;
                _deleted?: boolean | null;
                _lastChangedAt: number;
                owner?: string | null;
            } | null>;
            nextToken?: string | null;
            startedAt?: number | null;
        } | null;
        image?: string | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
    } | null;
};

export type ListUsersQueryVariables = {
    email?: string | null;
    filter?: ModelUserFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
    sortDirection?: ModelSortDirection | null;
};

export type ListUsersQuery = {
    listUsers?: {
        __typename: "ModelUserConnection";
        items: Array<{
            __typename: "User";
            id: string;
            cognitoID: string;
            email: string;
            name: string;
            wins: number;
            ownedTournaments?: {
                __typename: "ModelTournamentConnection";
                nextToken?: string | null;
                startedAt?: number | null;
            } | null;
            joinedTournaments?: {
                __typename: "ModelUserTournamentConnection";
                nextToken?: string | null;
                startedAt?: number | null;
            } | null;
            image?: string | null;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
            owner?: string | null;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
    } | null;
};

export type SyncUsersQueryVariables = {
    filter?: ModelUserFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
    lastSync?: number | null;
};

export type SyncUsersQuery = {
    syncUsers?: {
        __typename: "ModelUserConnection";
        items: Array<{
            __typename: "User";
            id: string;
            cognitoID: string;
            email: string;
            name: string;
            wins: number;
            ownedTournaments?: {
                __typename: "ModelTournamentConnection";
                nextToken?: string | null;
                startedAt?: number | null;
            } | null;
            joinedTournaments?: {
                __typename: "ModelUserTournamentConnection";
                nextToken?: string | null;
                startedAt?: number | null;
            } | null;
            image?: string | null;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
            owner?: string | null;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
    } | null;
};

export type GetTournamentQueryVariables = {
    id: string;
};

export type GetTournamentQuery = {
    getTournament?: {
        __typename: "Tournament";
        id: string;
        name: string;
        description: string;
        startDate: string;
        endDate: string;
        tournamentOwner: {
            __typename: "User";
            id: string;
            cognitoID: string;
            email: string;
            name: string;
            wins: number;
            ownedTournaments?: {
                __typename: "ModelTournamentConnection";
                nextToken?: string | null;
                startedAt?: number | null;
            } | null;
            joinedTournaments?: {
                __typename: "ModelUserTournamentConnection";
                nextToken?: string | null;
                startedAt?: number | null;
            } | null;
            image?: string | null;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
            owner?: string | null;
        };
        userID: string;
        participants?: {
            __typename: "ModelUserTournamentConnection";
            items: Array<{
                __typename: "UserTournament";
                id: string;
                userID: string;
                tournamentID: string;
                createdAt: string;
                updatedAt: string;
                _version: number;
                _deleted?: boolean | null;
                _lastChangedAt: number;
                owner?: string | null;
            } | null>;
            nextToken?: string | null;
            startedAt?: number | null;
        } | null;
        matches?: {
            __typename: "ModelMatchConnection";
            items: Array<{
                __typename: "Match";
                id: string;
                homeTeamScore?: number | null;
                awayTeamScore?: number | null;
                tournamentID: string;
                createdAt: string;
                updatedAt: string;
                _version: number;
                _deleted?: boolean | null;
                _lastChangedAt: number;
                matchHomeTeamId: string;
                matchAwayTeamId: string;
                owner?: string | null;
            } | null>;
            nextToken?: string | null;
            startedAt?: number | null;
        } | null;
        image?: string | null;
        teams?: {
            __typename: "ModelTeamConnection";
            items: Array<{
                __typename: "Team";
                id: string;
                name: string;
                tournamentID: string;
                image?: string | null;
                createdAt: string;
                updatedAt: string;
                _version: number;
                _deleted?: boolean | null;
                _lastChangedAt: number;
                owner?: string | null;
            } | null>;
            nextToken?: string | null;
            startedAt?: number | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
    } | null;
};

export type ListTournamentsQueryVariables = {
    filter?: ModelTournamentFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};

export type ListTournamentsQuery = {
    listTournaments?: {
        __typename: "ModelTournamentConnection";
        items: Array<{
            __typename: "Tournament";
            id: string;
            name: string;
            description: string;
            startDate: string;
            endDate: string;
            tournamentOwner: {
                __typename: "User";
                id: string;
                cognitoID: string;
                email: string;
                name: string;
                wins: number;
                image?: string | null;
                createdAt: string;
                updatedAt: string;
                _version: number;
                _deleted?: boolean | null;
                _lastChangedAt: number;
                owner?: string | null;
            };
            userID: string;
            participants?: {
                __typename: "ModelUserTournamentConnection";
                nextToken?: string | null;
                startedAt?: number | null;
            } | null;
            matches?: {
                __typename: "ModelMatchConnection";
                nextToken?: string | null;
                startedAt?: number | null;
            } | null;
            image?: string | null;
            teams?: {
                __typename: "ModelTeamConnection";
                nextToken?: string | null;
                startedAt?: number | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
            owner?: string | null;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
    } | null;
};

export type SyncTournamentsQueryVariables = {
    filter?: ModelTournamentFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
    lastSync?: number | null;
};

export type SyncTournamentsQuery = {
    syncTournaments?: {
        __typename: "ModelTournamentConnection";
        items: Array<{
            __typename: "Tournament";
            id: string;
            name: string;
            description: string;
            startDate: string;
            endDate: string;
            tournamentOwner: {
                __typename: "User";
                id: string;
                cognitoID: string;
                email: string;
                name: string;
                wins: number;
                image?: string | null;
                createdAt: string;
                updatedAt: string;
                _version: number;
                _deleted?: boolean | null;
                _lastChangedAt: number;
                owner?: string | null;
            };
            userID: string;
            participants?: {
                __typename: "ModelUserTournamentConnection";
                nextToken?: string | null;
                startedAt?: number | null;
            } | null;
            matches?: {
                __typename: "ModelMatchConnection";
                nextToken?: string | null;
                startedAt?: number | null;
            } | null;
            image?: string | null;
            teams?: {
                __typename: "ModelTeamConnection";
                nextToken?: string | null;
                startedAt?: number | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
            owner?: string | null;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
    } | null;
};

export type GetGuessQueryVariables = {
    id: string;
};

export type GetGuessQuery = {
    getGuess?: {
        __typename: "Guess";
        id: string;
        matchID: string;
        user: {
            __typename: "User";
            id: string;
            cognitoID: string;
            email: string;
            name: string;
            wins: number;
            ownedTournaments?: {
                __typename: "ModelTournamentConnection";
                nextToken?: string | null;
                startedAt?: number | null;
            } | null;
            joinedTournaments?: {
                __typename: "ModelUserTournamentConnection";
                nextToken?: string | null;
                startedAt?: number | null;
            } | null;
            image?: string | null;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
            owner?: string | null;
        };
        homeTeamScoreGuess?: number | null;
        awayTeamScoreGuess?: number | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        guessUserId: string;
        owner?: string | null;
    } | null;
};

export type ListGuessesQueryVariables = {
    filter?: ModelGuessFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};

export type ListGuessesQuery = {
    listGuesses?: {
        __typename: "ModelGuessConnection";
        items: Array<{
            __typename: "Guess";
            id: string;
            matchID: string;
            user: {
                __typename: "User";
                id: string;
                cognitoID: string;
                email: string;
                name: string;
                wins: number;
                image?: string | null;
                createdAt: string;
                updatedAt: string;
                _version: number;
                _deleted?: boolean | null;
                _lastChangedAt: number;
                owner?: string | null;
            };
            homeTeamScoreGuess?: number | null;
            awayTeamScoreGuess?: number | null;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
            guessUserId: string;
            owner?: string | null;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
    } | null;
};

export type SyncGuessesQueryVariables = {
    filter?: ModelGuessFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
    lastSync?: number | null;
};

export type SyncGuessesQuery = {
    syncGuesses?: {
        __typename: "ModelGuessConnection";
        items: Array<{
            __typename: "Guess";
            id: string;
            matchID: string;
            user: {
                __typename: "User";
                id: string;
                cognitoID: string;
                email: string;
                name: string;
                wins: number;
                image?: string | null;
                createdAt: string;
                updatedAt: string;
                _version: number;
                _deleted?: boolean | null;
                _lastChangedAt: number;
                owner?: string | null;
            };
            homeTeamScoreGuess?: number | null;
            awayTeamScoreGuess?: number | null;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
            guessUserId: string;
            owner?: string | null;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
    } | null;
};

export type GetTeamQueryVariables = {
    id: string;
};

export type GetTeamQuery = {
    getTeam?: {
        __typename: "Team";
        id: string;
        name: string;
        tournamentID: string;
        image?: string | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
    } | null;
};

export type ListTeamsQueryVariables = {
    filter?: ModelTeamFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};

export type ListTeamsQuery = {
    listTeams?: {
        __typename: "ModelTeamConnection";
        items: Array<{
            __typename: "Team";
            id: string;
            name: string;
            tournamentID: string;
            image?: string | null;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
            owner?: string | null;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
    } | null;
};

export type SyncTeamsQueryVariables = {
    filter?: ModelTeamFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
    lastSync?: number | null;
};

export type SyncTeamsQuery = {
    syncTeams?: {
        __typename: "ModelTeamConnection";
        items: Array<{
            __typename: "Team";
            id: string;
            name: string;
            tournamentID: string;
            image?: string | null;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
            owner?: string | null;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
    } | null;
};

export type GetMatchQueryVariables = {
    id: string;
};

export type GetMatchQuery = {
    getMatch?: {
        __typename: "Match";
        id: string;
        homeTeam: {
            __typename: "Team";
            id: string;
            name: string;
            tournamentID: string;
            image?: string | null;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
            owner?: string | null;
        };
        homeTeamScore?: number | null;
        awayTeamScore?: number | null;
        awayTeam: {
            __typename: "Team";
            id: string;
            name: string;
            tournamentID: string;
            image?: string | null;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
            owner?: string | null;
        };
        tournamentID: string;
        Guesses?: {
            __typename: "ModelGuessConnection";
            items: Array<{
                __typename: "Guess";
                id: string;
                matchID: string;
                homeTeamScoreGuess?: number | null;
                awayTeamScoreGuess?: number | null;
                createdAt: string;
                updatedAt: string;
                _version: number;
                _deleted?: boolean | null;
                _lastChangedAt: number;
                guessUserId: string;
                owner?: string | null;
            } | null>;
            nextToken?: string | null;
            startedAt?: number | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        matchHomeTeamId: string;
        matchAwayTeamId: string;
        owner?: string | null;
    } | null;
};

export type ListMatchesQueryVariables = {
    filter?: ModelMatchFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};

export type ListMatchesQuery = {
    listMatches?: {
        __typename: "ModelMatchConnection";
        items: Array<{
            __typename: "Match";
            id: string;
            homeTeam: {
                __typename: "Team";
                id: string;
                name: string;
                tournamentID: string;
                image?: string | null;
                createdAt: string;
                updatedAt: string;
                _version: number;
                _deleted?: boolean | null;
                _lastChangedAt: number;
                owner?: string | null;
            };
            homeTeamScore?: number | null;
            awayTeamScore?: number | null;
            awayTeam: {
                __typename: "Team";
                id: string;
                name: string;
                tournamentID: string;
                image?: string | null;
                createdAt: string;
                updatedAt: string;
                _version: number;
                _deleted?: boolean | null;
                _lastChangedAt: number;
                owner?: string | null;
            };
            tournamentID: string;
            Guesses?: {
                __typename: "ModelGuessConnection";
                nextToken?: string | null;
                startedAt?: number | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
            matchHomeTeamId: string;
            matchAwayTeamId: string;
            owner?: string | null;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
    } | null;
};

export type SyncMatchesQueryVariables = {
    filter?: ModelMatchFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
    lastSync?: number | null;
};

export type SyncMatchesQuery = {
    syncMatches?: {
        __typename: "ModelMatchConnection";
        items: Array<{
            __typename: "Match";
            id: string;
            homeTeam: {
                __typename: "Team";
                id: string;
                name: string;
                tournamentID: string;
                image?: string | null;
                createdAt: string;
                updatedAt: string;
                _version: number;
                _deleted?: boolean | null;
                _lastChangedAt: number;
                owner?: string | null;
            };
            homeTeamScore?: number | null;
            awayTeamScore?: number | null;
            awayTeam: {
                __typename: "Team";
                id: string;
                name: string;
                tournamentID: string;
                image?: string | null;
                createdAt: string;
                updatedAt: string;
                _version: number;
                _deleted?: boolean | null;
                _lastChangedAt: number;
                owner?: string | null;
            };
            tournamentID: string;
            Guesses?: {
                __typename: "ModelGuessConnection";
                nextToken?: string | null;
                startedAt?: number | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
            matchHomeTeamId: string;
            matchAwayTeamId: string;
            owner?: string | null;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
    } | null;
};

export type GetUserTournamentQueryVariables = {
    id: string;
};

export type GetUserTournamentQuery = {
    getUserTournament?: {
        __typename: "UserTournament";
        id: string;
        userID: string;
        tournamentID: string;
        user: {
            __typename: "User";
            id: string;
            cognitoID: string;
            email: string;
            name: string;
            wins: number;
            ownedTournaments?: {
                __typename: "ModelTournamentConnection";
                nextToken?: string | null;
                startedAt?: number | null;
            } | null;
            joinedTournaments?: {
                __typename: "ModelUserTournamentConnection";
                nextToken?: string | null;
                startedAt?: number | null;
            } | null;
            image?: string | null;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
            owner?: string | null;
        };
        tournament: {
            __typename: "Tournament";
            id: string;
            name: string;
            description: string;
            startDate: string;
            endDate: string;
            tournamentOwner: {
                __typename: "User";
                id: string;
                cognitoID: string;
                email: string;
                name: string;
                wins: number;
                image?: string | null;
                createdAt: string;
                updatedAt: string;
                _version: number;
                _deleted?: boolean | null;
                _lastChangedAt: number;
                owner?: string | null;
            };
            userID: string;
            participants?: {
                __typename: "ModelUserTournamentConnection";
                nextToken?: string | null;
                startedAt?: number | null;
            } | null;
            matches?: {
                __typename: "ModelMatchConnection";
                nextToken?: string | null;
                startedAt?: number | null;
            } | null;
            image?: string | null;
            teams?: {
                __typename: "ModelTeamConnection";
                nextToken?: string | null;
                startedAt?: number | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
            owner?: string | null;
        };
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
    } | null;
};

export type ListUserTournamentsQueryVariables = {
    filter?: ModelUserTournamentFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};

export type ListUserTournamentsQuery = {
    listUserTournaments?: {
        __typename: "ModelUserTournamentConnection";
        items: Array<{
            __typename: "UserTournament";
            id: string;
            userID: string;
            tournamentID: string;
            user: {
                __typename: "User";
                id: string;
                cognitoID: string;
                email: string;
                name: string;
                wins: number;
                image?: string | null;
                createdAt: string;
                updatedAt: string;
                _version: number;
                _deleted?: boolean | null;
                _lastChangedAt: number;
                owner?: string | null;
            };
            tournament: {
                __typename: "Tournament";
                id: string;
                name: string;
                description: string;
                startDate: string;
                endDate: string;
                userID: string;
                image?: string | null;
                createdAt: string;
                updatedAt: string;
                _version: number;
                _deleted?: boolean | null;
                _lastChangedAt: number;
                owner?: string | null;
            };
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
            owner?: string | null;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
    } | null;
};

export type SyncUserTournamentsQueryVariables = {
    filter?: ModelUserTournamentFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
    lastSync?: number | null;
};

export type SyncUserTournamentsQuery = {
    syncUserTournaments?: {
        __typename: "ModelUserTournamentConnection";
        items: Array<{
            __typename: "UserTournament";
            id: string;
            userID: string;
            tournamentID: string;
            user: {
                __typename: "User";
                id: string;
                cognitoID: string;
                email: string;
                name: string;
                wins: number;
                image?: string | null;
                createdAt: string;
                updatedAt: string;
                _version: number;
                _deleted?: boolean | null;
                _lastChangedAt: number;
                owner?: string | null;
            };
            tournament: {
                __typename: "Tournament";
                id: string;
                name: string;
                description: string;
                startDate: string;
                endDate: string;
                userID: string;
                image?: string | null;
                createdAt: string;
                updatedAt: string;
                _version: number;
                _deleted?: boolean | null;
                _lastChangedAt: number;
                owner?: string | null;
            };
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
            owner?: string | null;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
    } | null;
};

export type OnCreateUserSubscriptionVariables = {
    owner?: string | null;
};

export type OnCreateUserSubscription = {
    onCreateUser?: {
        __typename: "User";
        id: string;
        cognitoID: string;
        email: string;
        name: string;
        wins: number;
        ownedTournaments?: {
            __typename: "ModelTournamentConnection";
            items: Array<{
                __typename: "Tournament";
                id: string;
                name: string;
                description: string;
                startDate: string;
                endDate: string;
                userID: string;
                image?: string | null;
                createdAt: string;
                updatedAt: string;
                _version: number;
                _deleted?: boolean | null;
                _lastChangedAt: number;
                owner?: string | null;
            } | null>;
            nextToken?: string | null;
            startedAt?: number | null;
        } | null;
        joinedTournaments?: {
            __typename: "ModelUserTournamentConnection";
            items: Array<{
                __typename: "UserTournament";
                id: string;
                userID: string;
                tournamentID: string;
                createdAt: string;
                updatedAt: string;
                _version: number;
                _deleted?: boolean | null;
                _lastChangedAt: number;
                owner?: string | null;
            } | null>;
            nextToken?: string | null;
            startedAt?: number | null;
        } | null;
        image?: string | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
    } | null;
};

export type OnUpdateUserSubscriptionVariables = {
    owner?: string | null;
};

export type OnUpdateUserSubscription = {
    onUpdateUser?: {
        __typename: "User";
        id: string;
        cognitoID: string;
        email: string;
        name: string;
        wins: number;
        ownedTournaments?: {
            __typename: "ModelTournamentConnection";
            items: Array<{
                __typename: "Tournament";
                id: string;
                name: string;
                description: string;
                startDate: string;
                endDate: string;
                userID: string;
                image?: string | null;
                createdAt: string;
                updatedAt: string;
                _version: number;
                _deleted?: boolean | null;
                _lastChangedAt: number;
                owner?: string | null;
            } | null>;
            nextToken?: string | null;
            startedAt?: number | null;
        } | null;
        joinedTournaments?: {
            __typename: "ModelUserTournamentConnection";
            items: Array<{
                __typename: "UserTournament";
                id: string;
                userID: string;
                tournamentID: string;
                createdAt: string;
                updatedAt: string;
                _version: number;
                _deleted?: boolean | null;
                _lastChangedAt: number;
                owner?: string | null;
            } | null>;
            nextToken?: string | null;
            startedAt?: number | null;
        } | null;
        image?: string | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
    } | null;
};

export type OnDeleteUserSubscriptionVariables = {
    owner?: string | null;
};

export type OnDeleteUserSubscription = {
    onDeleteUser?: {
        __typename: "User";
        id: string;
        cognitoID: string;
        email: string;
        name: string;
        wins: number;
        ownedTournaments?: {
            __typename: "ModelTournamentConnection";
            items: Array<{
                __typename: "Tournament";
                id: string;
                name: string;
                description: string;
                startDate: string;
                endDate: string;
                userID: string;
                image?: string | null;
                createdAt: string;
                updatedAt: string;
                _version: number;
                _deleted?: boolean | null;
                _lastChangedAt: number;
                owner?: string | null;
            } | null>;
            nextToken?: string | null;
            startedAt?: number | null;
        } | null;
        joinedTournaments?: {
            __typename: "ModelUserTournamentConnection";
            items: Array<{
                __typename: "UserTournament";
                id: string;
                userID: string;
                tournamentID: string;
                createdAt: string;
                updatedAt: string;
                _version: number;
                _deleted?: boolean | null;
                _lastChangedAt: number;
                owner?: string | null;
            } | null>;
            nextToken?: string | null;
            startedAt?: number | null;
        } | null;
        image?: string | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
    } | null;
};

export type OnCreateTournamentSubscriptionVariables = {
    owner?: string | null;
};

export type OnCreateTournamentSubscription = {
    onCreateTournament?: {
        __typename: "Tournament";
        id: string;
        name: string;
        description: string;
        startDate: string;
        endDate: string;
        tournamentOwner: {
            __typename: "User";
            id: string;
            cognitoID: string;
            email: string;
            name: string;
            wins: number;
            ownedTournaments?: {
                __typename: "ModelTournamentConnection";
                nextToken?: string | null;
                startedAt?: number | null;
            } | null;
            joinedTournaments?: {
                __typename: "ModelUserTournamentConnection";
                nextToken?: string | null;
                startedAt?: number | null;
            } | null;
            image?: string | null;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
            owner?: string | null;
        };
        userID: string;
        participants?: {
            __typename: "ModelUserTournamentConnection";
            items: Array<{
                __typename: "UserTournament";
                id: string;
                userID: string;
                tournamentID: string;
                createdAt: string;
                updatedAt: string;
                _version: number;
                _deleted?: boolean | null;
                _lastChangedAt: number;
                owner?: string | null;
            } | null>;
            nextToken?: string | null;
            startedAt?: number | null;
        } | null;
        matches?: {
            __typename: "ModelMatchConnection";
            items: Array<{
                __typename: "Match";
                id: string;
                homeTeamScore?: number | null;
                awayTeamScore?: number | null;
                tournamentID: string;
                createdAt: string;
                updatedAt: string;
                _version: number;
                _deleted?: boolean | null;
                _lastChangedAt: number;
                matchHomeTeamId: string;
                matchAwayTeamId: string;
                owner?: string | null;
            } | null>;
            nextToken?: string | null;
            startedAt?: number | null;
        } | null;
        image?: string | null;
        teams?: {
            __typename: "ModelTeamConnection";
            items: Array<{
                __typename: "Team";
                id: string;
                name: string;
                tournamentID: string;
                image?: string | null;
                createdAt: string;
                updatedAt: string;
                _version: number;
                _deleted?: boolean | null;
                _lastChangedAt: number;
                owner?: string | null;
            } | null>;
            nextToken?: string | null;
            startedAt?: number | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
    } | null;
};

export type OnUpdateTournamentSubscriptionVariables = {
    owner?: string | null;
};

export type OnUpdateTournamentSubscription = {
    onUpdateTournament?: {
        __typename: "Tournament";
        id: string;
        name: string;
        description: string;
        startDate: string;
        endDate: string;
        tournamentOwner: {
            __typename: "User";
            id: string;
            cognitoID: string;
            email: string;
            name: string;
            wins: number;
            ownedTournaments?: {
                __typename: "ModelTournamentConnection";
                nextToken?: string | null;
                startedAt?: number | null;
            } | null;
            joinedTournaments?: {
                __typename: "ModelUserTournamentConnection";
                nextToken?: string | null;
                startedAt?: number | null;
            } | null;
            image?: string | null;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
            owner?: string | null;
        };
        userID: string;
        participants?: {
            __typename: "ModelUserTournamentConnection";
            items: Array<{
                __typename: "UserTournament";
                id: string;
                userID: string;
                tournamentID: string;
                createdAt: string;
                updatedAt: string;
                _version: number;
                _deleted?: boolean | null;
                _lastChangedAt: number;
                owner?: string | null;
            } | null>;
            nextToken?: string | null;
            startedAt?: number | null;
        } | null;
        matches?: {
            __typename: "ModelMatchConnection";
            items: Array<{
                __typename: "Match";
                id: string;
                homeTeamScore?: number | null;
                awayTeamScore?: number | null;
                tournamentID: string;
                createdAt: string;
                updatedAt: string;
                _version: number;
                _deleted?: boolean | null;
                _lastChangedAt: number;
                matchHomeTeamId: string;
                matchAwayTeamId: string;
                owner?: string | null;
            } | null>;
            nextToken?: string | null;
            startedAt?: number | null;
        } | null;
        image?: string | null;
        teams?: {
            __typename: "ModelTeamConnection";
            items: Array<{
                __typename: "Team";
                id: string;
                name: string;
                tournamentID: string;
                image?: string | null;
                createdAt: string;
                updatedAt: string;
                _version: number;
                _deleted?: boolean | null;
                _lastChangedAt: number;
                owner?: string | null;
            } | null>;
            nextToken?: string | null;
            startedAt?: number | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
    } | null;
};

export type OnDeleteTournamentSubscriptionVariables = {
    owner?: string | null;
};

export type OnDeleteTournamentSubscription = {
    onDeleteTournament?: {
        __typename: "Tournament";
        id: string;
        name: string;
        description: string;
        startDate: string;
        endDate: string;
        tournamentOwner: {
            __typename: "User";
            id: string;
            cognitoID: string;
            email: string;
            name: string;
            wins: number;
            ownedTournaments?: {
                __typename: "ModelTournamentConnection";
                nextToken?: string | null;
                startedAt?: number | null;
            } | null;
            joinedTournaments?: {
                __typename: "ModelUserTournamentConnection";
                nextToken?: string | null;
                startedAt?: number | null;
            } | null;
            image?: string | null;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
            owner?: string | null;
        };
        userID: string;
        participants?: {
            __typename: "ModelUserTournamentConnection";
            items: Array<{
                __typename: "UserTournament";
                id: string;
                userID: string;
                tournamentID: string;
                createdAt: string;
                updatedAt: string;
                _version: number;
                _deleted?: boolean | null;
                _lastChangedAt: number;
                owner?: string | null;
            } | null>;
            nextToken?: string | null;
            startedAt?: number | null;
        } | null;
        matches?: {
            __typename: "ModelMatchConnection";
            items: Array<{
                __typename: "Match";
                id: string;
                homeTeamScore?: number | null;
                awayTeamScore?: number | null;
                tournamentID: string;
                createdAt: string;
                updatedAt: string;
                _version: number;
                _deleted?: boolean | null;
                _lastChangedAt: number;
                matchHomeTeamId: string;
                matchAwayTeamId: string;
                owner?: string | null;
            } | null>;
            nextToken?: string | null;
            startedAt?: number | null;
        } | null;
        image?: string | null;
        teams?: {
            __typename: "ModelTeamConnection";
            items: Array<{
                __typename: "Team";
                id: string;
                name: string;
                tournamentID: string;
                image?: string | null;
                createdAt: string;
                updatedAt: string;
                _version: number;
                _deleted?: boolean | null;
                _lastChangedAt: number;
                owner?: string | null;
            } | null>;
            nextToken?: string | null;
            startedAt?: number | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
    } | null;
};

export type OnCreateGuessSubscriptionVariables = {
    owner?: string | null;
};

export type OnCreateGuessSubscription = {
    onCreateGuess?: {
        __typename: "Guess";
        id: string;
        matchID: string;
        user: {
            __typename: "User";
            id: string;
            cognitoID: string;
            email: string;
            name: string;
            wins: number;
            ownedTournaments?: {
                __typename: "ModelTournamentConnection";
                nextToken?: string | null;
                startedAt?: number | null;
            } | null;
            joinedTournaments?: {
                __typename: "ModelUserTournamentConnection";
                nextToken?: string | null;
                startedAt?: number | null;
            } | null;
            image?: string | null;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
            owner?: string | null;
        };
        homeTeamScoreGuess?: number | null;
        awayTeamScoreGuess?: number | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        guessUserId: string;
        owner?: string | null;
    } | null;
};

export type OnUpdateGuessSubscriptionVariables = {
    owner?: string | null;
};

export type OnUpdateGuessSubscription = {
    onUpdateGuess?: {
        __typename: "Guess";
        id: string;
        matchID: string;
        user: {
            __typename: "User";
            id: string;
            cognitoID: string;
            email: string;
            name: string;
            wins: number;
            ownedTournaments?: {
                __typename: "ModelTournamentConnection";
                nextToken?: string | null;
                startedAt?: number | null;
            } | null;
            joinedTournaments?: {
                __typename: "ModelUserTournamentConnection";
                nextToken?: string | null;
                startedAt?: number | null;
            } | null;
            image?: string | null;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
            owner?: string | null;
        };
        homeTeamScoreGuess?: number | null;
        awayTeamScoreGuess?: number | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        guessUserId: string;
        owner?: string | null;
    } | null;
};

export type OnDeleteGuessSubscriptionVariables = {
    owner?: string | null;
};

export type OnDeleteGuessSubscription = {
    onDeleteGuess?: {
        __typename: "Guess";
        id: string;
        matchID: string;
        user: {
            __typename: "User";
            id: string;
            cognitoID: string;
            email: string;
            name: string;
            wins: number;
            ownedTournaments?: {
                __typename: "ModelTournamentConnection";
                nextToken?: string | null;
                startedAt?: number | null;
            } | null;
            joinedTournaments?: {
                __typename: "ModelUserTournamentConnection";
                nextToken?: string | null;
                startedAt?: number | null;
            } | null;
            image?: string | null;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
            owner?: string | null;
        };
        homeTeamScoreGuess?: number | null;
        awayTeamScoreGuess?: number | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        guessUserId: string;
        owner?: string | null;
    } | null;
};

export type OnCreateTeamSubscriptionVariables = {
    owner?: string | null;
};

export type OnCreateTeamSubscription = {
    onCreateTeam?: {
        __typename: "Team";
        id: string;
        name: string;
        tournamentID: string;
        image?: string | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
    } | null;
};

export type OnUpdateTeamSubscriptionVariables = {
    owner?: string | null;
};

export type OnUpdateTeamSubscription = {
    onUpdateTeam?: {
        __typename: "Team";
        id: string;
        name: string;
        tournamentID: string;
        image?: string | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
    } | null;
};

export type OnDeleteTeamSubscriptionVariables = {
    owner?: string | null;
};

export type OnDeleteTeamSubscription = {
    onDeleteTeam?: {
        __typename: "Team";
        id: string;
        name: string;
        tournamentID: string;
        image?: string | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
    } | null;
};

export type OnCreateMatchSubscriptionVariables = {
    owner?: string | null;
};

export type OnCreateMatchSubscription = {
    onCreateMatch?: {
        __typename: "Match";
        id: string;
        homeTeam: {
            __typename: "Team";
            id: string;
            name: string;
            tournamentID: string;
            image?: string | null;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
            owner?: string | null;
        };
        homeTeamScore?: number | null;
        awayTeamScore?: number | null;
        awayTeam: {
            __typename: "Team";
            id: string;
            name: string;
            tournamentID: string;
            image?: string | null;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
            owner?: string | null;
        };
        tournamentID: string;
        Guesses?: {
            __typename: "ModelGuessConnection";
            items: Array<{
                __typename: "Guess";
                id: string;
                matchID: string;
                homeTeamScoreGuess?: number | null;
                awayTeamScoreGuess?: number | null;
                createdAt: string;
                updatedAt: string;
                _version: number;
                _deleted?: boolean | null;
                _lastChangedAt: number;
                guessUserId: string;
                owner?: string | null;
            } | null>;
            nextToken?: string | null;
            startedAt?: number | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        matchHomeTeamId: string;
        matchAwayTeamId: string;
        owner?: string | null;
    } | null;
};

export type OnUpdateMatchSubscriptionVariables = {
    owner?: string | null;
};

export type OnUpdateMatchSubscription = {
    onUpdateMatch?: {
        __typename: "Match";
        id: string;
        homeTeam: {
            __typename: "Team";
            id: string;
            name: string;
            tournamentID: string;
            image?: string | null;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
            owner?: string | null;
        };
        homeTeamScore?: number | null;
        awayTeamScore?: number | null;
        awayTeam: {
            __typename: "Team";
            id: string;
            name: string;
            tournamentID: string;
            image?: string | null;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
            owner?: string | null;
        };
        tournamentID: string;
        Guesses?: {
            __typename: "ModelGuessConnection";
            items: Array<{
                __typename: "Guess";
                id: string;
                matchID: string;
                homeTeamScoreGuess?: number | null;
                awayTeamScoreGuess?: number | null;
                createdAt: string;
                updatedAt: string;
                _version: number;
                _deleted?: boolean | null;
                _lastChangedAt: number;
                guessUserId: string;
                owner?: string | null;
            } | null>;
            nextToken?: string | null;
            startedAt?: number | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        matchHomeTeamId: string;
        matchAwayTeamId: string;
        owner?: string | null;
    } | null;
};

export type OnDeleteMatchSubscriptionVariables = {
    owner?: string | null;
};

export type OnDeleteMatchSubscription = {
    onDeleteMatch?: {
        __typename: "Match";
        id: string;
        homeTeam: {
            __typename: "Team";
            id: string;
            name: string;
            tournamentID: string;
            image?: string | null;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
            owner?: string | null;
        };
        homeTeamScore?: number | null;
        awayTeamScore?: number | null;
        awayTeam: {
            __typename: "Team";
            id: string;
            name: string;
            tournamentID: string;
            image?: string | null;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
            owner?: string | null;
        };
        tournamentID: string;
        Guesses?: {
            __typename: "ModelGuessConnection";
            items: Array<{
                __typename: "Guess";
                id: string;
                matchID: string;
                homeTeamScoreGuess?: number | null;
                awayTeamScoreGuess?: number | null;
                createdAt: string;
                updatedAt: string;
                _version: number;
                _deleted?: boolean | null;
                _lastChangedAt: number;
                guessUserId: string;
                owner?: string | null;
            } | null>;
            nextToken?: string | null;
            startedAt?: number | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        matchHomeTeamId: string;
        matchAwayTeamId: string;
        owner?: string | null;
    } | null;
};

export type OnCreateUserTournamentSubscriptionVariables = {
    owner?: string | null;
};

export type OnCreateUserTournamentSubscription = {
    onCreateUserTournament?: {
        __typename: "UserTournament";
        id: string;
        userID: string;
        tournamentID: string;
        user: {
            __typename: "User";
            id: string;
            cognitoID: string;
            email: string;
            name: string;
            wins: number;
            ownedTournaments?: {
                __typename: "ModelTournamentConnection";
                nextToken?: string | null;
                startedAt?: number | null;
            } | null;
            joinedTournaments?: {
                __typename: "ModelUserTournamentConnection";
                nextToken?: string | null;
                startedAt?: number | null;
            } | null;
            image?: string | null;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
            owner?: string | null;
        };
        tournament: {
            __typename: "Tournament";
            id: string;
            name: string;
            description: string;
            startDate: string;
            endDate: string;
            tournamentOwner: {
                __typename: "User";
                id: string;
                cognitoID: string;
                email: string;
                name: string;
                wins: number;
                image?: string | null;
                createdAt: string;
                updatedAt: string;
                _version: number;
                _deleted?: boolean | null;
                _lastChangedAt: number;
                owner?: string | null;
            };
            userID: string;
            participants?: {
                __typename: "ModelUserTournamentConnection";
                nextToken?: string | null;
                startedAt?: number | null;
            } | null;
            matches?: {
                __typename: "ModelMatchConnection";
                nextToken?: string | null;
                startedAt?: number | null;
            } | null;
            image?: string | null;
            teams?: {
                __typename: "ModelTeamConnection";
                nextToken?: string | null;
                startedAt?: number | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
            owner?: string | null;
        };
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
    } | null;
};

export type OnUpdateUserTournamentSubscriptionVariables = {
    owner?: string | null;
};

export type OnUpdateUserTournamentSubscription = {
    onUpdateUserTournament?: {
        __typename: "UserTournament";
        id: string;
        userID: string;
        tournamentID: string;
        user: {
            __typename: "User";
            id: string;
            cognitoID: string;
            email: string;
            name: string;
            wins: number;
            ownedTournaments?: {
                __typename: "ModelTournamentConnection";
                nextToken?: string | null;
                startedAt?: number | null;
            } | null;
            joinedTournaments?: {
                __typename: "ModelUserTournamentConnection";
                nextToken?: string | null;
                startedAt?: number | null;
            } | null;
            image?: string | null;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
            owner?: string | null;
        };
        tournament: {
            __typename: "Tournament";
            id: string;
            name: string;
            description: string;
            startDate: string;
            endDate: string;
            tournamentOwner: {
                __typename: "User";
                id: string;
                cognitoID: string;
                email: string;
                name: string;
                wins: number;
                image?: string | null;
                createdAt: string;
                updatedAt: string;
                _version: number;
                _deleted?: boolean | null;
                _lastChangedAt: number;
                owner?: string | null;
            };
            userID: string;
            participants?: {
                __typename: "ModelUserTournamentConnection";
                nextToken?: string | null;
                startedAt?: number | null;
            } | null;
            matches?: {
                __typename: "ModelMatchConnection";
                nextToken?: string | null;
                startedAt?: number | null;
            } | null;
            image?: string | null;
            teams?: {
                __typename: "ModelTeamConnection";
                nextToken?: string | null;
                startedAt?: number | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
            owner?: string | null;
        };
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
    } | null;
};

export type OnDeleteUserTournamentSubscriptionVariables = {
    owner?: string | null;
};

export type OnDeleteUserTournamentSubscription = {
    onDeleteUserTournament?: {
        __typename: "UserTournament";
        id: string;
        userID: string;
        tournamentID: string;
        user: {
            __typename: "User";
            id: string;
            cognitoID: string;
            email: string;
            name: string;
            wins: number;
            ownedTournaments?: {
                __typename: "ModelTournamentConnection";
                nextToken?: string | null;
                startedAt?: number | null;
            } | null;
            joinedTournaments?: {
                __typename: "ModelUserTournamentConnection";
                nextToken?: string | null;
                startedAt?: number | null;
            } | null;
            image?: string | null;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
            owner?: string | null;
        };
        tournament: {
            __typename: "Tournament";
            id: string;
            name: string;
            description: string;
            startDate: string;
            endDate: string;
            tournamentOwner: {
                __typename: "User";
                id: string;
                cognitoID: string;
                email: string;
                name: string;
                wins: number;
                image?: string | null;
                createdAt: string;
                updatedAt: string;
                _version: number;
                _deleted?: boolean | null;
                _lastChangedAt: number;
                owner?: string | null;
            };
            userID: string;
            participants?: {
                __typename: "ModelUserTournamentConnection";
                nextToken?: string | null;
                startedAt?: number | null;
            } | null;
            matches?: {
                __typename: "ModelMatchConnection";
                nextToken?: string | null;
                startedAt?: number | null;
            } | null;
            image?: string | null;
            teams?: {
                __typename: "ModelTeamConnection";
                nextToken?: string | null;
                startedAt?: number | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
            owner?: string | null;
        };
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
    } | null;
};
