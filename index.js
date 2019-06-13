const express = require('express'),
    PORT = 5000,
    bodyParser = require('body-parser'),
    mongoose = require("mongoose"),
    Quote = require("./models/quote");

// initialize express
const app = express();

// enable parsing of posted data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// db connection
const options = {
    keepAlive: 1,
    connectTimeoutMS: 30000,
    useNewUrlParser: true
};

const uri = "mongodb+srv://dbuser:dbuser@becode-lhupj.gcp.mongodb.net/quotes?retryWrites=true&w=majority";

mongoose.connect(uri, options);

// import the route handling module
require("./routes/quoteRoutes")(app);

// start the server
app.listen(PORT, () => {
    console.log(`Server running`);
});

