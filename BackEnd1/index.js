const express = require('express');
const bodyParser = require('body-parser');
// const cors = require('cors');
// create express app
const app = express();
const cors = require('cors');
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse requests of content-type - application/json
app.use(bodyParser.json());

// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, "public")));


// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
// mongoose.connect(dbConfig.url, {
//     useNewUrlParser: true
// }).then(() => {
//     console.log("Successfully connected to the database");    
// }).catch(err => {
//     console.log('Could not connect to the database. Exiting now...', err);
//     process.exit();
// });
// app.use(cors());
mongoose.connect(dbConfig.url, { useNewUrlParser: true });

// app.use(logger("dev"));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, "public")));

app.use(cors());

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to Relation application. Take notes quickly. Organize and keep track of all your notes."});
});

// Require Notes routes
require('./app/routes/relation.routes.js')(app);

// listen for requests
app.listen(8080, () => {
    console.log("Server is listening on port 8080");
});