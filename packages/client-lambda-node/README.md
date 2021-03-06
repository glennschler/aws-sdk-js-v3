# @aws-sdk/client-lambda-node

## Description

<fullname>AWS Lambda</fullname> <p> <b>Overview</b> </p> <p>This is the <i>AWS Lambda API Reference</i>. The AWS Lambda Developer Guide provides additional information. For the service overview, see <a href="http://docs.aws.amazon.com/lambda/latest/dg/welcome.html">What is AWS Lambda</a>, and for information about how the service works, see <a href="http://docs.aws.amazon.com/lambda/latest/dg/lambda-introduction.html">AWS Lambda: How it Works</a> in the <b>AWS Lambda Developer Guide</b>.</p>

## Installing

To install the this package using NPM, simply type the following into a terminal window: 

```
npm install @aws-sdk/client-lambda-node
```

## Getting Started

### Import

The AWS SDK is modulized by clients and commends in CommonJS modules. To send a request, you only need to import the client(`LambdaClient`) and the commands you need, for example `InvokeAsyncCommand`:

```javascript
//javascript
const { LambdaClient } = require('@aws-sdk/client-lambda-node/LambdaClient');
const { InvokeAsyncCommand } = require('@aws-sdk/client-lambda-node/commands/InvokeAsyncCommand');
```

```javascript
//typescript
const { LambdaClient } = import '@aws-sdk/client-lambda-node/LambdaClient';
const { InvokeAsyncCommand } = import '@aws-sdk/client-lambda-node/commands/InvokeAsyncCommand';
```

### Usage

To send a request, you:

* Initiate client with configurations.(credentials, region). For more information you can refer to the [API reference][].
* Initiate command with input parameters.
* Call `send` operation of client with command object as input.
* If you are using a custom http handler, you may call `destroy()` to close open connections. 

```javascript
const lambda = new LambdaClient({region: 'region'});
//clients can be shared by different commands
const params = {
    FunctionName: /**a string value*/,
    InvokeArgs: /**a blob value*/
    /**You can supply readable stream to streaming input. e.g. fs.createReadStream(file) */,
};
const invokeAsyncCommand = new InvokeAsyncCommand(params);
lambda.send(invokeAsyncCommand).then(data => {
    // do something
}).catch(error => {
    // error handling
})
```

Besides using promise style, there are 2 other ways to send a request:

```javascript
// async/await
try {
    const data = await lambda.send(invokeAsyncCommand);
    // do something
} catch(error) {
    // error handling
}
```

```javascript
// callback
lambda.send(invokeAsyncCommand, (err, data) => {
    //do something
})
```
 
Besides using `send()`, the SDK can also send requests using the simplified callback style in version 2 of the SDK.

```javascript
import * as AWS from '@aws-sdk/@aws-sdk/client-lambda-node/Lambda';
const lambda = new AWS.Lambda({region: 'region'})
lambda.invokeAsync(params, (err, data) => {
    //do something
})

```

### Troubleshooting 

When the service returns an exception, inpecting the exceptions is always helpful. You can not only access the exception information but also response metadata(i.e request id).

```javascript
try {
    const data = await lambda.send(invokeAsyncCommand);
    // do something
} catch(error) {
    const metadata = error.$metadata;
    console.log(
`requestId: ${metadata.requestId}
cfId: ${metadata.cfId}
extendedRequestId: ${metadata.extendedRequestId}`
    );
/*
The keys within exceptions are also parsed, you can access them by specifying exception names like below:
    if(error.name === 'SomeServiceException') {
        const value = error.specialKeyInException;
    }
*/
}
```

## Getting Help

Please use these community resources for getting help. We use the GitHub issues for tracking bugs and feature requests and have limited bandwidth to address them.

 * Ask a question on [StackOverflow](https://stackoverflow.com/questions/tagged/aws-sdk-js) and tag it with `aws-sdk-js`
 * Come join the AWS JavaScript community on [gitter](https://gitter.im/aws/aws-sdk-js-v3)
 * If it turns out that you may have found a bug, please [open an issue](https://github.com/aws/aws-sdk-js-v3/issues)

## Contributing
 
This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/@aws-sdk/client-lambda-node' package is updated. To contribute to SDK you can checkout our [code generator package][].

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

[code generator package]: https://github.com/aws/aws-sdk-js-v3/tree/master/packages/service-types-generator

[API reference]: https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/
