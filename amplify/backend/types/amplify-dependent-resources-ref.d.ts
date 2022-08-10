export type AmplifyDependentResourcesAttributes = {
    "api": {
        "ballermapmvp": {
            "GraphQLAPIIdOutput": "string",
            "GraphQLAPIEndpointOutput": "string"
        }
    },
    "auth": {
        "ballermapmvp52e1ffed": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string",
            "UserPoolId": "string",
            "UserPoolArn": "string",
            "UserPoolName": "string",
            "AppClientIDWeb": "string",
            "AppClientID": "string"
        },
        "userPoolGroups": {
            "bmuserpoolGroupRole": "string"
        }
    },
    "storage": {
        "s3cd7b2bfc": {
            "BucketName": "string",
            "Region": "string"
        }
    },
    "function": {
        "updateEventStatus": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string",
            "CloudWatchEventRule": "string"
        }
    },
    "analytics": {
        "ballermapmvp": {
            "Region": "string",
            "Id": "string",
            "appName": "string"
        }
    }
}