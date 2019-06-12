const express = require('express'),
    PORT = 5000,
    bodyParser = require('body-parser');

// initialize express
const app = express();

// enable parsing of posted data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// import the route handling module
require("./routes/quoteRoutes")(app);

// start the server
app.listen(PORT, () => {
    console.log(`Server running`);
});