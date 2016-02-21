var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var server = require('http').createServer(app);
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/futebol');
//mongoose.connect('mongodb://heroku_b3d83sdk:ucmpo29e9rokm345g6e631ffcq@ds061415.mongolab.com:61415/heroku_b3d83sdk');
//heroku mongodb://<heroku_mb4b83hr>:<3a412be7>@ds043324.mongolab.com:43324/heroku_mb4b83hr
//MONGOLAB_URI: mongodb://heroku_b3d83sdk:ucmpo29e9rokm345g6e631ffcq@ds061415.mongolab.com:61415/heroku_b3d83sdk    

app.all('/*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,X-Requested-With');
    next();
});


app.use(bodyParser.json());
app.get('/api/teste', function(req, res) {
	res.render('index');
});

app.get('/api', function(req, res){

	var Jogador = mongoose.model('jogador',  require(__dirname + '/jogador'));

	var jogadores = Jogador.find(function(err, jogadores) {
	  if (err) res.send(err);

	  res.send(jogadores);
	});
});


app.get('/api/d-all-jogadores', function(req, res){
	var Jogador = mongoose.model('jogador',  require(__dirname + '/jogador'));

	var jogadores = Jogador.remove(function(err, callback){
		res.send(callback);
	});
});


app.post('/api/', function(req, res){
	var Jogador = mongoose.model('jogador', require(__dirname + '/jogador'));
	var chris = new Jogador(req.body);
	chris.save(function(err, jogador) {
	  if (err) res.send(err);
	  res.json(jogador);
	});
});

server.listen(process.env.PORT || 3000);