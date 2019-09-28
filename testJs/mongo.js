
const MongoClient = require('mongodb').MongoClient;
var http = require('http');
var url = require('url');
const uri = "mongodb+srv://admin:31011997@ipccluster-lneua.gcp.mongodb.net/test?retryWrites=true";
const client = new MongoClient(uri, { useNewUrlParser: true });
console.log("started");

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var q = url.parse(req.url, true).query;
    if(q!=null) {
        var txt = getResults(q.text);
        console.log(q.text);
        res.end(txt);
    }
    
  }).listen(8080);

function getResults(searchItem) {
    console.log("called results");
    client.connect(err => {
        var collection = client.db("ipc_sections")
        var query = '{ $text: { $search: "'+searchItem+'" } }' ;
        collection.find(query).toArray(function(err, result) {
          if (err) throw err;
          console.log(result);
          client.close();

        });
        
      });
}
var findDocuments = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('restaurants');
  // Find some documents
  collection.find({ '$text': {'$search' : 'Garden' } } ).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs);
    callback(docs);
  });      
}

