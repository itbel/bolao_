export type AmplifyDependentResourcesAttributes = {
    auth: {
        bolao651c7585: {
            IdentityPoolId: "string";
            IdentityPoolName: "string";
            UserPoolId: "string";
            UserPoolArn: "string";
            UserPoolName: "string";
            AppClientIDWeb: "string";
            AppClientID: "string";
        };
    };
    api: {
        bolao: {
            GraphQLAPIKeyOutput: "string";
            GraphQLAPIIdOutput: "string";
            GraphQLAPIEndpointOutput: "string";
        };
    };
    function: {
        postConfirmation: {
            Name: "string";
            Arn: "string";
            Region: "string";
            LambdaExecutionRole: "string";
        };
        preAuthentication: {
            Name: "string";
            Arn: "string";
            Region: "string";
            LambdaExecutionRole: "string";
        };
    };
};
