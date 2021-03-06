/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($email: String) {
    onCreateUser(email: $email) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($email: String) {
    onUpdateUser(email: $email) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($email: String) {
    onDeleteUser(email: $email) {
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
export const onCreateTournament = /* GraphQL */ `
  subscription OnCreateTournament($owner: String) {
    onCreateTournament(owner: $owner) {
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
export const onUpdateTournament = /* GraphQL */ `
  subscription OnUpdateTournament($owner: String) {
    onUpdateTournament(owner: $owner) {
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
export const onDeleteTournament = /* GraphQL */ `
  subscription OnDeleteTournament($owner: String) {
    onDeleteTournament(owner: $owner) {
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
export const onCreateRound = /* GraphQL */ `
  subscription OnCreateRound($owner: String) {
    onCreateRound(owner: $owner) {
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
export const onUpdateRound = /* GraphQL */ `
  subscription OnUpdateRound($owner: String) {
    onUpdateRound(owner: $owner) {
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
export const onDeleteRound = /* GraphQL */ `
  subscription OnDeleteRound($owner: String) {
    onDeleteRound(owner: $owner) {
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
export const onCreateGuess = /* GraphQL */ `
  subscription OnCreateGuess($owner: String) {
    onCreateGuess(owner: $owner) {
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
export const onUpdateGuess = /* GraphQL */ `
  subscription OnUpdateGuess($owner: String) {
    onUpdateGuess(owner: $owner) {
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
export const onDeleteGuess = /* GraphQL */ `
  subscription OnDeleteGuess($owner: String) {
    onDeleteGuess(owner: $owner) {
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
export const onCreateTeam = /* GraphQL */ `
  subscription OnCreateTeam($owner: String) {
    onCreateTeam(owner: $owner) {
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
export const onUpdateTeam = /* GraphQL */ `
  subscription OnUpdateTeam($owner: String) {
    onUpdateTeam(owner: $owner) {
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
export const onDeleteTeam = /* GraphQL */ `
  subscription OnDeleteTeam($owner: String) {
    onDeleteTeam(owner: $owner) {
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
export const onCreateMatch = /* GraphQL */ `
  subscription OnCreateMatch($owner: String) {
    onCreateMatch(owner: $owner) {
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
export const onUpdateMatch = /* GraphQL */ `
  subscription OnUpdateMatch($owner: String) {
    onUpdateMatch(owner: $owner) {
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
export const onDeleteMatch = /* GraphQL */ `
  subscription OnDeleteMatch($owner: String) {
    onDeleteMatch(owner: $owner) {
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
export const onCreateUserTournament = /* GraphQL */ `
  subscription OnCreateUserTournament($email: String, $owner: String) {
    onCreateUserTournament(email: $email, owner: $owner) {
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
export const onUpdateUserTournament = /* GraphQL */ `
  subscription OnUpdateUserTournament($email: String, $owner: String) {
    onUpdateUserTournament(email: $email, owner: $owner) {
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
export const onDeleteUserTournament = /* GraphQL */ `
  subscription OnDeleteUserTournament($email: String, $owner: String) {
    onDeleteUserTournament(email: $email, owner: $owner) {
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
