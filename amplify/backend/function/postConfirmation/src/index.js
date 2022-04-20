/* Amplify Params - DO NOT EDIT
    API_BOLAO_GRAPHQLAPIENDPOINTOUTPUT
    API_BOLAO_GRAPHQLAPIIDOUTPUT
    API_BOLAO_GRAPHQLAPIKEYOUTPUT
    ENV
    REGION
Amplify Params - DO NOT EDIT *//* Amplify Params - DO NOT EDIT
    API_BOLAO_GRAPHQLAPIENDPOINTOUTPUT
    API_BOLAO_GRAPHQLAPIIDOUTPUT
    API_BOLAO_GRAPHQLAPIKEYOUTPUT
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
    const graphqlClient = new appsync.AWSAppSyncClient({
        url: process.env.API_BOLAO_GRAPHQLAPIENDPOINTOUTPUT,
        region: process.env.REGION,
        auth: {
            type: "AWS_IAM",
            credentials
        },
        disableOffline: true
    });

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
        await graphqlClient.mutate({
            mutation,
            variables: {
                name: event.request.userAttributes.name,
                cognitoID: event.request.userAttributes.sub,
                email: event.request.userAttributes.email
            }
        });
        callback(null, event);
    } catch (error) {
        callback(error);
    }
};