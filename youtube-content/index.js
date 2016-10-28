var express = require('express');
var app = express();
var path = require('path');
var mustacheExpress = require('mustache-express');

app.engine('html', mustacheExpress());

app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendStatus(200);
});

//youtube
app.get('/yt', function(req, res) {
	try {
		var paramsAsString = Buffer.from(req.query.v, 'base64').toString('utf8');
		var params = JSON.parse(paramsAsString);
		console.log('params = %j', params);
	    res.render('youtube.html', params);
	} catch(err) {
		console.log(err);
		res.sendStatus(404);
	}
});

app.post('/count', function(req, res) {console.log('COUNT');
	console.log('count %s %s', req.query.u, req.query.v);
});

app.listen(8083);
console.log('youtube content server running at port 8083.');