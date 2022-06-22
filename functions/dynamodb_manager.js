let operationTypes = {
  SCAN: 0, 
  PUT: 1, 
  GET: 2, 
  UPDATE: 3
};

let putDynamodbItem = (dynamoDb, params) => {
    return new Promise((resolve, reject) => {
      dynamoDb.put(params, function(error, data) {
        if (error) {
          console.log("put operation error", error);
          reject(error);
        } else {
          resolve(data);
        }
      });
    });
};

let getDynamodbItem = (dynamoDb, params) => {
  return new Promise((resolve, reject) => {
    dynamoDb.query(params, function(error, data) {
      if (error) {
        console.log("get operation error", error);
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
};

let scanDynamodbTable = (dynamoDb, params) => {
  return new Promise((resolve, reject) => {
    dynamoDb.scan(params, function(error, data) {
      if (error) {
        console.log("scan operation error", error); 
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
};

let updateDynamodbItem = (dynamoDb, updateParams) => {
  return new Promise((resolve, reject) => {
    dynamoDb.update(updateParams, function(error, data) {
      if (error) {
        console.log("update operation error", error);
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
};

let executeDynamodbOperation = async (awsConfig, operation, params) => {
  try {
    const dynamoDb = new awsConfig.DynamoDB.DocumentClient();
    console.log(operation);
    let operationResponse = null; 
    switch (operation) {
      case operationTypes.PUT:
        operationResponse = await putDynamodbItem(dynamoDb, params);
        break;
      case operationTypes.GET: 
        operationResponse = await getDynamodbItem(dynamoDb, params);
        break;
      case operationTypes.SCAN: 
        operationResponse = await scanDynamodbTable(dynamoDb, params); 
        break;
      case operationTypes.UPDATE: 
        operationResponse = await updateDynamodbItem(dynamoDb, params); 
        break;
      default: 
        throw new Error('Invalid operation provided, allowed values are put, get, scan or update');
    };
    return operationResponse;
  } catch (error) {
    throw error; 
  };
}; 


module.exports = {
  executeDynamodbOperation, 
  operationTypes
};

