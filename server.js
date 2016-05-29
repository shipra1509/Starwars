const express = require('express');
const bodyParser= require('body-parser')
const app = express();
const MongoClient = require('mongodb').MongoClient

var db

MongoClient.connect('mongodb://star-wars-quotes:star-wars-quotes@ds019063.mlab.com:19063/star-wars-quotes', (err, database) => {
	if (err) return console.log(err)
		db = database
	app.listen(3000, function() {
		console.log('listening on 3000')
	})
})

app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
	var cursor = db.collection('quotes').find()
})

app.post('/quotes', (req, res) => {
  db.collection('quotes').save(req.body, (err, result) => {
    if (err) return console.log(err)

    console.log('saved to database')
    res.redirect('/')
  })
})

