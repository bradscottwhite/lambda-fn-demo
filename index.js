/**
 * Code for a lambda Rest API tutorial
 * @author Brad White
 * @date 12/20/22
 */

exports.handler = async event => {
	const { name } = event; // Retrives the input

	const body = { msg: `Hello ${name}!` }; // Message to output

  // Send response back to UI:
	return {
		statusCode: 200, // Sets status to successful
		headers: { // Sets headers:
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Credentials': true,
			'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
			'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
			'X-Requested-With': '*'
		},
		body: JSON.stringify(body)
	};
};
