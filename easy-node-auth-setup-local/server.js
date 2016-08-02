//Set up, all the tools we need ==============================================================================
var express = require("express");
var app = express();

var path = require("path");
var port = process.env.PORT || '8080';
var mongoose = require("mongoose");
var passport = require("passport");
var flash = require("connect-flash");

var morgan = require("morgan");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var expressSession = require("express-session");

var configDB = require('./config/database.js');

//Configuration ==============================================================================================
mongoose.connect(configDB.url);

require("./config/passport")(passport); // pass passport for configuration

//To be able to access css for example 
app.use(express.static(path.join(__dirname, 'public')));

//Set up express application

app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser()); // get information from html forms

app.set('view engine','pug'); // set up pug for templating

//Required for passport
app.use(expressSession({secret:'devSecretYeah'})); // Session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session


//Routes =====================================================================================================
require("./app/routes.js")(app,passport); //Lod the routes and pass in our app and passport

//Launch =====================================================================================================
app.listen(port,function(){
    console.log("App running on "+ port + " let's start doing some magic");
});