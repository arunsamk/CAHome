var express = require('express');
var application = express();
var path = require('path');

//Making server file to assign port dynamically.
var port = process.env.PORT || 7070;

//Making express to look in the public directory for (css, js, html .....).
application.use(express.static(__dirname + '/public'));
application.use('/node_modules', express.static(__dirname + '/node_modules'));

//Setting the home page
application.get('/', function(request, response){
	response.sendFile('public/crackjoycepurple.html' , { root : __dirname});
	//response.sendFile('crackjoycepurple');
});
application.listen(port, function(){
	console.log('Node Server is running on port: ' + port);
});
