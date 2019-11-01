module.change_code = 1;
'use strict';

var alexa = require( 'alexa-app' );
var app = new alexa.app( 'mako-skills' );


app.launch( function( request, response ) {
	response.say( 'Welcome to madi game' ).reprompt( 'Way to go. You got it to run. Bad ass.' ).shouldEndSession( false );
} );


app.error = function( exception, request, response ) {
	console.log(exception)
	console.log(request);
	console.log(response);	
	response.say( 'Sorry an error occurred ' + error.message);
};

app.intent('sayNumber',
  {
    "slots":{"number":"NUMBER"}
	,"utterances":[ 
		"say the number {1-100|number}",
		"give me the number {!-100|number}",
		"tell me the number {!-100|number}",
		"I want to hear you say the number {!-100|number}"]
  },
  function(request,response) {
    var number = request.slot('number');
    response.say("You asked for the number "+number);
  }
);

app.intent('sayRandomNumber',
  {
	"utterances":[ 
		"say a random number",
		"give a the random number",
		"tell a the random number",
		"I want to hear you say a random number"]
  },
  function(request,response) {
    var number = Math.floor((Math.random() * 10) + 1);
    response.say("You asked for a random number " + number);
  }
);

app.intent('sayTrueOrFalse',
  {
	"utterances":[ 
		"true or false",
		"false or true",
		"I want to hear you say true or false",
		"I want to hear you say false or true"]
  },
  function(request,response) {
	var b = (function() {
	if(Math.random() >= 0.5) {return "true"}
	else {return "false"}
	})();
    response.say("it is " + b);
  }
);

app.intent('throwDice',
  {
	"utterances":[
		"throw the dice",
		"dice",
		"throw dice",
		"throw a dice"]
  },
  function(request,response) {
	var number = Math.floor((Math.random() * 6) + 1);
    response.say("The dice says " + number);
  }
);

module.exports = app;
