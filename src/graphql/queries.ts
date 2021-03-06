/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($email: AWSEmail!) {
    getUser(email: $email) {
      id
      cognitoID
      email
      name
      wins
      ownedTournaments {
        items {
          id
          name
          description
          startDate
          endDate
          owner
          image
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      joinedTournaments {
        items {
          id
          userID
          tournamentID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          email
          owner
        }
        nextToken
        startedAt
      }
      image
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $email: AWSEmail
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUsers(
      email: $email
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        cognitoID
        email
        name
        wins
        ownedTournaments {
          nextToken
          startedAt
        }
        joinedTournaments {
          nextToken
          startedAt
        }
        image
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        cognitoID
        email
        name
        wins
        ownedTournaments {
          nextToken
          startedAt
        }
        joinedTournaments {
          nextToken
          startedAt
        }
        image
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getTournament = /* GraphQL */ `
  query GetTournament($id: ID!) {
    getTournament(id: $id) {
      id
      name
      description
      startDate
      endDate
      owner
      tournamentOwner {
        id
        cognitoID
        email
        name
        wins
        ownedTournaments {
          nextToken
          startedAt
        }
        joinedTournaments {
          nextToken
          startedAt
        }
        image
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      participants {
        items {
          id
          userID
          tournamentID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          email
          owner
        }
        nextToken
        startedAt
      }
      image
      teams {
        items {
          id
          name
          tournamentID
          image
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      rounds {
        items {
          id
          name
          tournamentID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listTournaments = /* GraphQL */ `
  query ListTournaments(
    $filter: ModelTournamentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTournaments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        startDate
        endDate
        owner
        tournamentOwner {
          id
          cognitoID
          email
          name
          wins
          image
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        participants {
          nextToken
          startedAt
        }
        image
        teams {
          nextToken
          startedAt
        }
        rounds {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTournaments = /* GraphQL */ `
  query SyncTournaments(
    $filter: ModelTournamentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTournaments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        description
        startDate
        endDate
        owner
        tournamentOwner {
          id
          cognitoID
          email
          name
          wins
          image
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        participants {
          nextToken
          startedAt
        }
        image
        teams {
          nextToken
          startedAt
        }
        rounds {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const tournamentByName = /* GraphQL */ `
  query TournamentByName(
    $name: String!
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelTournamentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    tournamentByName(
      name: $name
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        description
        startDate
        endDate
        owner
        tournamentOwner {
          id
          cognitoID
          email
          name
          wins
          image
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        participants {
          nextToken
          startedAt
        }
        image
        teams {
          nextToken
          startedAt
        }
        rounds {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getRound = /* GraphQL */ `
  query GetRound($id: ID!) {
    getRound(id: $id) {
      id
      name
      tournamentID
      tournament {
        id
        name
        description
        startDate
        endDate
        owner
        tournamentOwner {
          id
          cognitoID
          email
          name
          wins
          image
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        participants {
          nextToken
          startedAt
        }
        image
        teams {
          nextToken
          startedAt
        }
        rounds {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      matches {
        items {
          id
          homeTeamScore
          awayTeamScore
          round
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          matchHomeTeamId
          matchAwayTeamId
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const listRounds = /* GraphQL */ `
  query ListRounds($filter: ModelRoundFilterInput, $limit: Int, $nextToken: String) {
    listRounds(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        tournamentID
        tournament {
          id
          name
          description
          startDate
          endDate
          owner
          image
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        matches {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncRounds = /* GraphQL */ `
  query SyncRounds(
    $filter: ModelRoundFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncRounds(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        tournamentID
        tournament {
          id
          name
          description
          startDate
          endDate
          owner
          image
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        matches {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const roundsByTournament = /* GraphQL */ `
  query RoundsByTournament(
    $tournamentID: ID!
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelRoundFilterInput
    $limit: Int
    $nextToken: String
  ) {
    roundsByTournament(
      tournamentID: $tournamentID
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        tournamentID
        tournament {
          id
          name
          description
          startDate
          endDate
          owner
          image
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        matches {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getGuess = /* GraphQL */ `
  query GetGuess($id: ID!) {
    getGuess(id: $id) {
      id
      matchID
      match {
        id
        homeTeam {
          id
          name
          tournamentID
          image
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        homeTeamScore
        awayTeamScore
        awayTeam {
          id
          name
          tournamentID
          image
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        round
        guesses {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        matchHomeTeamId
        matchAwayTeamId
        owner
      }
      user {
        id
        cognitoID
        email
        name
        wins
        ownedTournaments {
          nextToken
          startedAt
        }
        joinedTournaments {
          nextToken
          startedAt
        }
        image
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      homeTeamScoreGuess
      awayTeamScoreGuess
      points
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      guessUserId
      owner
    }
  }
`;
export const listGuesses = /* GraphQL */ `
  query ListGuesses($filter: ModelGuessFilterInput, $limit: Int, $nextToken: String) {
    listGuesses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        matchID
        match {
          id
          homeTeamScore
          awayTeamScore
          round
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          matchHomeTeamId
          matchAwayTeamId
          owner
        }
        user {
          id
          cognitoID
          email
          name
          wins
          image
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        homeTeamScoreGuess
        awayTeamScoreGuess
        points
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        guessUserId
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncGuesses = /* GraphQL */ `
  query SyncGuesses(
    $filter: ModelGuessFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncGuesses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        matchID
        match {
          id
          homeTeamScore
          awayTeamScore
          round
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          matchHomeTeamId
          matchAwayTeamId
          owner
        }
        user {
          id
          cognitoID
          email
          name
          wins
          image
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        homeTeamScoreGuess
        awayTeamScoreGuess
        points
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        guessUserId
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const guessesByMatch = /* GraphQL */ `
  query GuessesByMatch(
    $matchID: ID!
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelGuessFilterInput
    $limit: Int
    $nextToken: String
  ) {
    guessesByMatch(
      matchID: $matchID
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        matchID
        match {
          id
          homeTeamScore
          awayTeamScore
          round
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          matchHomeTeamId
          matchAwayTeamId
          owner
        }
        user {
          id
          cognitoID
          email
          name
          wins
          image
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        homeTeamScoreGuess
        awayTeamScoreGuess
        points
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        guessUserId
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getTeam = /* GraphQL */ `
  query GetTeam($id: ID!) {
    getTeam(id: $id) {
      id
      name
      tournamentID
      tournament {
        id
        name
        description
        startDate
        endDate
        owner
        tournamentOwner {
          id
          cognitoID
          email
          name
          wins
          image
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        participants {
          nextToken
          startedAt
        }
        image
        teams {
          nextToken
          startedAt
        }
        rounds {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      image
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const listTeams = /* GraphQL */ `
  query ListTeams($filter: ModelTeamFilterInput, $limit: Int, $nextToken: String) {
    listTeams(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        tournamentID
        tournament {
          id
          name
          description
          startDate
          endDate
          owner
          image
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        image
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTeams = /* GraphQL */ `
  query SyncTeams(
    $filter: ModelTeamFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTeams(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        tournamentID
        tournament {
          id
          name
          description
          startDate
          endDate
          owner
          image
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        image
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getMatch = /* GraphQL */ `
  query GetMatch($id: ID!) {
    getMatch(id: $id) {
      id
      homeTeam {
        id
        name
        tournamentID
        tournament {
          id
          name
          description
          startDate
          endDate
          owner
          image
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        image
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      homeTeamScore
      awayTeamScore
      awayTeam {
        id
        name
        tournamentID
        tournament {
          id
          name
          description
          startDate
          endDate
          owner
          image
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        image
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      round
      guesses {
        items {
          id
          matchID
          homeTeamScoreGuess
          awayTeamScoreGuess
          points
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          guessUserId
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      matchHomeTeamId
      matchAwayTeamId
      owner
    }
  }
`;
export const listMatches = /* GraphQL */ `
  query ListMatches($filter: ModelMatchFilterInput, $limit: Int, $nextToken: String) {
    listMatches(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        homeTeam {
          id
          name
          tournamentID
          image
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        homeTeamScore
        awayTeamScore
        awayTeam {
          id
          name
          tournamentID
          image
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        round
        guesses {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        matchHomeTeamId
        matchAwayTeamId
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncMatches = /* GraphQL */ `
  query SyncMatches(
    $filter: ModelMatchFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMatches(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        homeTeam {
          id
          name
          tournamentID
          image
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        homeTeamScore
        awayTeamScore
        awayTeam {
          id
          name
          tournamentID
          image
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        round
        guesses {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        matchHomeTeamId
        matchAwayTeamId
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const matchesByRound = /* GraphQL */ `
  query MatchesByRound(
    $round: ID!
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelMatchFilterInput
    $limit: Int
    $nextToken: String
  ) {
    matchesByRound(
      round: $round
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        homeTeam {
          id
          name
          tournamentID
          image
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        homeTeamScore
        awayTeamScore
        awayTeam {
          id
          name
          tournamentID
          image
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        round
        guesses {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        matchHomeTeamId
        matchAwayTeamId
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getUserTournament = /* GraphQL */ `
  query GetUserTournament($id: ID!) {
    getUserTournament(id: $id) {
      id
      userID
      tournamentID
      user {
        id
        cognitoID
        email
        name
        wins
        ownedTournaments {
          nextToken
          startedAt
        }
        joinedTournaments {
          nextToken
          startedAt
        }
        image
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      tournament {
        id
        name
        description
        startDate
        endDate
        owner
        tournamentOwner {
          id
          cognitoID
          email
          name
          wins
          image
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        participants {
          nextToken
          startedAt
        }
        image
        teams {
          nextToken
          startedAt
        }
        rounds {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      email
      owner
    }
  }
`;
export const listUserTournaments = /* GraphQL */ `
  query ListUserTournaments(
    $filter: ModelUserTournamentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserTournaments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        tournamentID
        user {
          id
          cognitoID
          email
          name
          wins
          image
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        tournament {
          id
          name
          description
          startDate
          endDate
          owner
          image
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        email
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUserTournaments = /* GraphQL */ `
  query SyncUserTournaments(
    $filter: ModelUserTournamentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserTournaments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        userID
        tournamentID
        user {
          id
          cognitoID
          email
          name
          wins
          image
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        tournament {
          id
          name
          description
          startDate
          endDate
          owner
          image
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        email
        owner
      }
      nextToken
      startedAt
    }
  }
`;
