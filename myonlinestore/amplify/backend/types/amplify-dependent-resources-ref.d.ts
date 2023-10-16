export type AmplifyDependentResourcesAttributes = {
  "api": {
    "listAccountRepresentatives": {
      "ApiId": "string",
      "ApiName": "string",
      "RootUrl": "string"
    },
    "myonlinestore": {
      "GraphQLAPIEndpointOutput": "string",
      "GraphQLAPIIdOutput": "string"
    }
  },
  "auth": {
    "myonlinestore8d2e122f8d2e122f": {
      "AppClientID": "string",
      "AppClientIDWeb": "string",
      "IdentityPoolId": "string",
      "IdentityPoolName": "string",
      "UserPoolArn": "string",
      "UserPoolId": "string",
      "UserPoolName": "string"
    },
    "userPoolGroups": {
      "adminGroupRole": "string",
      "userGroupRole": "string"
    }
  },
  "function": {
    "listAccountRepresentatives": {
      "Arn": "string",
      "LambdaExecutionRole": "string",
      "LambdaExecutionRoleArn": "string",
      "Name": "string",
      "Region": "string"
    }
  }
}