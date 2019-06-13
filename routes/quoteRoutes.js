// initialize db access
const options = {
    keepAlive: 1,
    connectTimeoutMS: 30000,
    useNewUrlParser: true
};
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://dbuser:dbuser@becode-lhupj.gcp.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, options);



module.exports = app => {

    client.connect(async err => {
        const allQuotes = client.db("quotes").collection("quotes");
        let numberofdocs = await allQuotes.countDocuments();
        console.log(numberofdocs);
        // perform actions on the collection object




        // get all quotes
        app.get('/quotes', (req, res) => {
            let buffer = "";

            allQuotes.find().toArray(function (err, quotes) {
                if (err) {
                    res.send(`Error ${err}`);
                } else {
                    quotes.forEach(quote => {
                        buffer += "<blockquote><p>" + quote.quoteText + "<br /><small>" + quote.quoteAuthor + "</small></p></blockquote>";
                    });

                    console.log(buffer);
                    res.set('Content-Type', 'text/html');
                    res.send(buffer);
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

        client.close();
    });

}
