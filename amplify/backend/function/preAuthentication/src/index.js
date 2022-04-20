/* Amplify Params - DO NOT EDIT
    API_TICTACTOE_GRAPHQLAPIENDPOINTOUTPUT
    API_TICTACTOE_GRAPHQLAPIIDOUTPUT
    API_TICTACTOE_GRAPHQLAPIKEYOUTPUT
    ENV
    REGION
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
const appsync = require("aws-appsync");
const gql = require("graphql-tag");
require("cross-fetch/polyfill");

exports.handler = async (event, context, callback) => {
    const credentials = {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        sessionToken: process.env.AWS_SESSION_TOKEN
    }
    console.log('credentials', credentials);
    console.log("process.env.API_BOLAO_GRAPHQLAPIENDPOINTOUTPUT", process.env.API_BOLAO_GRAPHQLAPIENDPOINTOUTPUT)
    const graphqlClient = new appsync.AWSAppSyncClient({
        url: process.env.API_BOLAO_GRAPHQLAPIENDPOINTOUTPUT,
        region: process.env.REGION,
        auth: {
            type: "AWS_IAM",
            credentials
        },
        disableOffline: true
    });
    const query = gql`
    query getUser($email: AWSEmail!) {
        getUser(email: $email) {
                id
            }
        }
    `;
    const mutation = gql`
    mutation createUser(
        $name: String!
        $cognitoID: String!
        $email: AWSEmail!
    ) {
        createUser(
            input: { cognitoID: $cognitoID, email: $email, name: $name }
        ) {
            id
        }
    }
    `;
    try {
        const response = await graphqlClient.query({
            query,
            variables: {
                email: event.request.userAttributes.email
            },
            disableOffline: true,
        });
        if (response.data.getUser) {
            console.log("User exists.");
            callback(null, event)
        } else {
            console.log("User does not exist. Creating...");
            await graphqlClient.mutate({
                mutation,
                variables: {
                    name: event.request.userAttributes.name,
                    cognitoID: event.request.userAttributes.sub,
                    email: event.request.userAttributes.email
                }
            });
            callback(null, event);
        }
    } catch (error) {
        console.log(error);
        callback(error)
    }
};