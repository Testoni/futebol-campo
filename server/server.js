var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var server = require('http').createServer(app);
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/heroku-dev');
//mongoose.connect('mongodb://heroku_b3d83sdk:ucmpo29e9rokm345g6e631ffcq@ds061415.mongolab.com:61415/heroku_b3d83sdk');
//heroku mongodb://<heroku_mb4b83hr>:<3a412be7>@ds043324.mongolab.com:43324/heroku_mb4b83hr
//MONGOLAB_URI: mongodb://heroku_b3d83sdk:ucmpo29e9rokm345g6e631ffcq@ds061415.mongolab.com:61415/heroku_b3d83sdk    

app.all('/*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,X-Requested-With');
    next();
});

/* call the built-in save method to save to the database
chris.save(function(err) {
  if (err) throw err;

  console.log('User saved successfully!');
});

*/

/*var db = null;

 MongoClient.connect("mongodb://localhost:27017/heroku-dev", function(err, db) {
	if(!err) {
		console.log("We are connected");
	}
});*/
//var collection = db.collection('users');

//var list = collection.find().toArray(function(err, items) {});



app.use(bodyParser.json());
/*app.use(bodyParser.urlencoded({
	extended: true
}));*/

// set the port of our application
// process.env.PORT lets the port be set by Heroku

// set the view engine to ejs
//app.set('view engine', 'ejs');

// make express look in the public directory for assets (css/js/img)
//app.use(express.static(__dirname + '/client/app/'));A

// set the home page route
app.get('/api/teste', function(req, res) {

	// ejs render automatically looks in the views folder
	res.render('index');
});


/*app.get('', function(req, res){
	res.send('API do Ismael');
});*/

app.get('/api', function(req, res){
	if(req.query){
		//console.log(req.query);
	}

var User = mongoose.model('user',  require(__dirname + '/user'));

var users = User.find(function(err, users) {
  if (err) res.send(err);

  res.send(users);
});
	
});


app.get('/api/d-all-users', function(req, res){
	if(req.query){
		//console.log(req.query);
	}

var User = mongoose.model('user',  require(__dirname + '/user'));

var users = User.remove(function(err, callback){

	res.send(callback);
});

	//res.send(users);	
	
});


app.post('/api/', function(req, res){

	if(req.body){
	}

var User = mongoose.model('user', require(__dirname + '/user'));


var chris = new User(req.body);

// call the custom method. this will just add -dude to his name
// user will now be Chris-dude
/*chris.addstringnome(function(err, name) {
  if (err) throw err;

  console.log('Your new name is ' + name);
});
*/

chris.save(function(err, user) {
  if (err) res.send(err);

  console.log('User saved successfully!');
  res.json(user);
});

});

server.listen(process.env.PORT || 3000);