<br />
<div align="center">
  <h3 align="center">AWS UTILITIES PKG</h3>

  <p align="center">
    A set of utilities for AWS 
    <br />
  </p>
</div>

## About The Project

Utilities to execute operations on AWS Services like DynamoDB

# DynamoDB 

The module allows to pick and operation and execute it quickly 

1. Select your aws region
    ```
      const {AwsUtilitiesPkg} = require('aws-utilities-pkg');
      const awsUtilsPkg =  new AwsUtilitiesPkg('us-east-1');
    ```

2. Pick the operation you want to execute 
    ```
        const  dynamodbOperation = awsUtil.dynamodbOperationTypes.PUT;    
    ```
    Allowed values are: PUT, GET, UPDATE, SCAN

3. execute the transaction 

    ```
        const params = {
            TableName: tableName,
            KeyConditionExpression: 'key = :key',
            ExpressionAttributeValues: {
                ':key': value
            }
        };
      
        let newRecord = await awsUtil.executeDynamodbTransaction(dynamodbOperation, params);
    ```

### Built With

* [Node.js](https://nodejs.dev/)
* [AWS-SDK](https://aws.amazon.com/sdk-for-javascript/)

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## this commit is gonna be removed

## License

Distributed under the MIT License.

## Contact

Esteban Ceron - [@estebance](https://twitter.com/estebance) - restebance@gmail.com
