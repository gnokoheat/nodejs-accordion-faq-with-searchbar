var express = require('express');
var app = express();
var fs = require('fs');
var ejs = require('ejs');

app.set("view engine", "ejs");

app.get('/', (req, res) => {
    fs.readFile('./views/faq.json', (err, data) => {
        if (err) throw err;
        var faqInfo = JSON.parse(data);
        faqInfo.sort(function (a, b) {
            return a["index"] - b["index"];
        });
        res.render("faq", {
            faqInfo: faqInfo
        });
    });
});

module.exports = app;