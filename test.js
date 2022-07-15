const { AwsUtilitiesPkg } = require('./index');

let execution = new  AwsUtilitiesPkg('us-east-1');
let operationTypes = execution.dynamodbOperationTypes;
console.log(operationTypes);

execution.executeDynamodbTransaction(operationTypes.GET, 'params');
