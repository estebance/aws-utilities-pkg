const AWS = require('aws-sdk');
const { executeDynamodbOperation } = require("./functions/dynamodb_manager");

let AwsUtilitiesPkg = (awsRegion) => {  
  this.awsConfig = AWS.config.update({region: awsRegion });
};

AwsUtilitiesPkg.prototype.executeDynamodbTransaction = async (operation, params) => {
  try {
    const operationResponse =  await executeDynamodbOperation(this.awsConfig, operation, params);
    return operationResponse; 
  } catch (error) {
    throw error; 
  }
};

module.exports = AwsUtilitiesPkg;
