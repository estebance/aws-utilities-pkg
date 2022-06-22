const AWS = require('aws-sdk');
const { executeDynamodbOperation, operationTypes } = require("./functions/dynamodb_manager");

function AwsUtilitiesPkg(awsRegion = 'us-east-1'){  
  this.awsRegion = awsRegion;
  AWS.config.update({ region: this.awsRegion });  
};

AwsUtilitiesPkg.prototype.executeDynamodbTransaction = async function (operation, params){
  try {
    const operationResponse =  await executeDynamodbOperation(AWS, operation, params);
    return operationResponse; 
  } catch (error) {
    throw error; 
  }
};

AwsUtilitiesPkg.prototype.dynamodbOperationTypes = operationTypes;

module.exports = {AwsUtilitiesPkg};
