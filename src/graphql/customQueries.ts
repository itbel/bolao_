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
                userID
                participants {
                    nextToken
                    startedAt
                }
                image
                createdAt
                updatedAt
            }
            nextToken
            startedAt
        }
    }
`;
