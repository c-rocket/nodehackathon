

/* In step 4 we re-organize the code so its more modular. Create a scripts/api folder and move /items to 
itemAPI.js

First show use of require() and module.exports by splitting db creds into dbconfig.js 

Then do itemAPI.js

Explain absolute vs relative paths. Options to use NODE_PATH variable or app-module-path npm module
*/




var http = require('http')
var express = require('express')
var bodyParser = require('body-parser')

var port = process.env.PORT || 8080;
  

var app = express()

app.use(bodyParser.json());
app.use(express.static(__dirname))

app.get('/', function(req,res){
	res.send('index.html')
})


require('./scripts/API/itemAPI.js')(app)

app.listen(port, function() {
    console.log('aOne step04 listening on port ' + port)

});