const express = require('express');
const app = express();


app.get('/', (req, res) => {
  
  res.send('Hello from App Engine!');

});


// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
var findDocuments = function(db,qry, callback) {
  // Get the documents collection
  var collection = db.collection('collection1');
  // Find some documents
  collection.find({ '$text': {'$search' : qry } } ).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    //console.log(docs);
    results = docs;
    return docs;
  });      
}

// use the findDocuments() function
var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

// Connection URL
const url = "mongodb+srv://admin:31011997@ipccluster-lneua.gcp.mongodb.net/test?retryWrites=true";

// Use connect method to connect to the server




app.get('/:qry', (req, res) => {
  var qry = req.params.qry;
  MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    var db = client.db('ipc_sections');
    console.log("Connected correctly to server");
    var collection = db.collection('collection1');
    collection.find({ '$text': {'$search' : qry } } ).toArray(function(err, docs) {
    assert.equal(err, null);
    client.close();
    res.send(docs);
  });
  });
 

});
