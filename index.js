/**
 * Code for a lambda Rest API tutorial
 * @author Brad White
 * @date 12/20/22
 */

exports.handler = async (event, context, callback) => {
	const name = event.name;

	const body = {
		msg: `Hello ${name}!`
	};

	const res = {
		statusCode: 200,
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Credentials': true,
			'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
			'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
			'X-Requested-With': '*'
		},
		body: JSON.stringify(body)
	};

  return callback(null, res);
};
