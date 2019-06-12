const jsonfile = require('jsonfile'),
    fs = require('fs'),
    dbfile = './DB/quotes.json';


module.exports = app => {

    // get all quotes
    app.get('/quotes', (req, res) => {
        console.log('Getting all quotes ...');
        let quotes = "";
        jsonfile.readFile(dbfile, (err, content) => {

            for (let i = 0; i < content.length; i++) {
                quotes += "<blockquote><p>" + content[i].quoteText + "<br /><small>" + content[i].quoteAuthor + "</small></p></blockquote>";

            }

            res.set('Content-Type', 'text/html');
            res.send(quotes);
            console.log(`POST QUOTES ${quotes}`)
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