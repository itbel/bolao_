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
