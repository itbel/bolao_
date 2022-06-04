export const onCreateTeam = /* GraphQL */ `
  subscription OnCreateTeam {
    onCreateTeam {
      id
      name
    }
  }
`;

export const onCreateRound = /* GraphQL */ `
  subscription OnCreateRound {
    onCreateRound {
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
