// Require all needed modules
var express = require('express'),
    request = require('request'),
    async   = require('async');

// Create the Express application
var app = express();

// Get an instance of the Express Router
var router = express.Router();

var CLIENT_ID = '';
var CLIENT_SECRET = '';

// Register routes of Router
require('./routes')(router, request, async, CLIENT_ID, CLIENT_SECRET);

// Prefix all routes with /api
app.use('/api', router);

// Set the location of static files
app.use(express.static('./public'));

// Start application server
app.listen(8080, '127.0.0.1', function(){
    console.log('Express server started on 127.0.0.1:8080');
});