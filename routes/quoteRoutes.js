// initialize db access
const Quote = require("../models/quote");

module.exports = app => {

    // get all quotes
    app.get('/quotes', (req, res) => {
        console.log('Getting all quotes ...');
        Quote.find({}, function (err, allQuotes) {
            if (err) {
                console.log(err);
            } else {
                // console.log(allQuotes);
                res.render("quotes/index", { quotes: allQuotes });
            }
        });
    });


    // add a quote
    app.post('/quotes', (req, res) => {
        res.send('POST request to the homepage')

    });

    // get a particular quote
    app.get('/quotes/:id', (req, res) => {
        res.send('GET request to specific quote')

    });

    // update a particular quote
    app.put('/quotes/:id', (req, res) => {
        res.send('PUT request to specific quote')

    });

    // delete a particular quote
    app.delete('/quotes/:id', (req, res) => {
        res.send('DELETE request to specific quote')

    });

}
