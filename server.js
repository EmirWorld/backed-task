/*
* Import Express
* */
const express = require('express');

/*
* Import Body-parser
* */
const bodyParser = require('body-parser');

/*
* Import CORS
* */
const cors = require("cors");

/*
* Setting cors options
* */
const corsOptions = {
    origin: 'http://localhost:8080'
};

/*
* Init express app
* */
const app = express();

/*
* CORS and Body-parser Middleware
* */
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

/*
* Sync database
* */
const db = require("./app/models")
db.newSequelize.sync();

/*
* Simple Route
* */
app.get('/', (req, res) => {
    res.json({message: 'Welcome'})
});

/*
* User API Routes
* */
require('./app/routes/user.routes.js')(app);

/*
* Set port for requests
* */
const PORT = process.env.PORT || 8081;
app.listen(PORT, (req, res) => {
    console.log('Server is running on port ' + PORT)
});

