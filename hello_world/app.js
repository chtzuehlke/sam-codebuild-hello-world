exports.lambdaHandler = async (event, context) => {
        return {
            'statusCode': 200,
            'body': process.env.LAMBDA_PARAM
        }
};

