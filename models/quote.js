const mongoose = require("mongoose");

const quoteSchema = new mongoose.Schema(
    {
        quoteText: String,
        quoteAuthor: String
    },
    {
        collection: 'quotes_full'
    });

module.exports = mongoose.model("Quote", quoteSchema);