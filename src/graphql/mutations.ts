/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser($input: CreateUserInput!, $condition: ModelUserConditionInput) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser($input: UpdateUserInput!, $condition: ModelUserConditionInput) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser($input: DeleteUserInput!, $condition: ModelUserConditionInput) {
    deleteUser(input: $input, condition: $condition) {
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
export const createTournament = /* GraphQL */ `
  mutation CreateTournament(
    $input: CreateTournamentInput!
    $condition: ModelTournamentConditionInput
  ) {
    createTournament(input: $input, condition: $condition) {
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
export const updateTournament = /* GraphQL */ `
  mutation UpdateTournament(
    $input: UpdateTournamentInput!
    $condition: ModelTournamentConditionInput
  ) {
    updateTournament(input: $input, condition: $condition) {
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
export const deleteTournament = /* GraphQL */ `
  mutation DeleteTournament(
    $input: DeleteTournamentInput!
    $condition: ModelTournamentConditionInput
  ) {
    deleteTournament(input: $input, condition: $condition) {
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
export const createRound = /* GraphQL */ `
  mutation CreateRound($input: CreateRoundInput!, $condition: ModelRoundConditionInput) {
    createRound(input: $input, condition: $condition) {
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
export const updateRound = /* GraphQL */ `
  mutation UpdateRound($input: UpdateRoundInput!, $condition: ModelRoundConditionInput) {
    updateRound(input: $input, condition: $condition) {
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
export const deleteRound = /* GraphQL */ `
  mutation DeleteRound($input: DeleteRoundInput!, $condition: ModelRoundConditionInput) {
    deleteRound(input: $input, condition: $condition) {
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
export const createGuess = /* GraphQL */ `
  mutation CreateGuess($input: CreateGuessInput!, $condition: ModelGuessConditionInput) {
    createGuess(input: $input, condition: $condition) {
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
export const updateGuess = /* GraphQL */ `
  mutation UpdateGuess($input: UpdateGuessInput!, $condition: ModelGuessConditionInput) {
    updateGuess(input: $input, condition: $condition) {
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
export const deleteGuess = /* GraphQL */ `
  mutation DeleteGuess($input: DeleteGuessInput!, $condition: ModelGuessConditionInput) {
    deleteGuess(input: $input, condition: $condition) {
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
export const createTeam = /* GraphQL */ `
  mutation CreateTeam($input: CreateTeamInput!, $condition: ModelTeamConditionInput) {
    createTeam(input: $input, condition: $condition) {
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
export const updateTeam = /* GraphQL */ `
  mutation UpdateTeam($input: UpdateTeamInput!, $condition: ModelTeamConditionInput) {
    updateTeam(input: $input, condition: $condition) {
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
export const deleteTeam = /* GraphQL */ `
  mutation DeleteTeam($input: DeleteTeamInput!, $condition: ModelTeamConditionInput) {
    deleteTeam(input: $input, condition: $condition) {
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
export const createMatch = /* GraphQL */ `
  mutation CreateMatch($input: CreateMatchInput!, $condition: ModelMatchConditionInput) {
    createMatch(input: $input, condition: $condition) {
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
export const updateMatch = /* GraphQL */ `
  mutation UpdateMatch($input: UpdateMatchInput!, $condition: ModelMatchConditionInput) {
    updateMatch(input: $input, condition: $condition) {
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
export const deleteMatch = /* GraphQL */ `
  mutation DeleteMatch($input: DeleteMatchInput!, $condition: ModelMatchConditionInput) {
    deleteMatch(input: $input, condition: $condition) {
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
export const createUserTournament = /* GraphQL */ `
  mutation CreateUserTournament(
    $input: CreateUserTournamentInput!
    $condition: ModelUserTournamentConditionInput
  ) {
    createUserTournament(input: $input, condition: $condition) {
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
export const updateUserTournament = /* GraphQL */ `
  mutation UpdateUserTournament(
    $input: UpdateUserTournamentInput!
    $condition: ModelUserTournamentConditionInput
  ) {
    updateUserTournament(input: $input, condition: $condition) {
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
export const deleteUserTournament = /* GraphQL */ `
  mutation DeleteUserTournament(
    $input: DeleteUserTournamentInput!
    $condition: ModelUserTournamentConditionInput
  ) {
    deleteUserTournament(input: $input, condition: $condition) {
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
