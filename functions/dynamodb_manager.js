
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
    let operationResponse = null; 
    switch (operation) {
      case 'put':
       operationResponse = await putDynamodbItem(dynamoDb, params);
      case 'get': 
       operationResponse = await getDynamodbItem(dynamoDb, params);
      case 'scan': 
        operationResponse = await scanDynamodbTable(dynamoDb, params); 
      case 'update': 
        operationResponse = await updateDynamodbItem(dynamoDb, params); 
      default: 
        throw new Error('Invalid operation provided, allowed values are put, get, scan or update');
    };
    return operationResponse;
  } catch (error) {
    throw error; 
  };
}; 


module.exports = {
  executeDynamodbOperation;
};

