const express = require('express');

// Mongoose Connection

const mongoose = require('mongoose');

// MongoClient connection
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Root:<1234>@studentlist.plcof.mongodb.net/<studentlist>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

// mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true });
// let db = mongoose.connection;

// // Check connection
// db.once('open', function(){
//   console.log('Connected to MongoDB');
// });

// // Check for DB errors
// db.on('error', function(err){
//   console.log(err);
// });

// Init App
const app = express();


// Start Server

app.listen(3000, () => {
    console.log('Express server started at port : 3000');
});
