/**
 * Code for a lambda Rest API tutorial
 * @author Brad White
 * @date 12/20/22
 */

exports.handler = async event => {
	let body = {};
	
	if (event.body !== null && event.body !== undefined) {
    	let { name } = JSON.parse(event.body); // Retrives the input

		body = { msg: `Hello ${name}!` }; // Message to output
	}
	
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
