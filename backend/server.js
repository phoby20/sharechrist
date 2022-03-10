const express = require('express');
const app = express();
const bodytParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
app.use(bodytParser.urlencoded({extended : true}))
const methodOverride = require('method-override')
app.use(methodOverride('_method'))

app.get('/', function(req, res) {
  res.send('Welcome ShareChrist')
})

app.listen("8080")
console.log("listening on server 8080")