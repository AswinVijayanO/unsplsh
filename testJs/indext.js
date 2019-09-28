var MongoClient = require('mongodb').MongoClient
const url = "mongodb+srv://admin:31011997@ipccluster-lneua.gcp.mongodb.net/test?retryWrites=true";

exports.ipcapi = (req, res) => {
  const keyword =
    req.query && req.query.name
      ? req.query.name
      : req.body && req.body.name
      ? req.body.name
      : '';
      MongoClient.connect(url, function(err, client) {
        var db = client.db('ipc_sections');
        console.log("Connected correctly to server");
        var collection = db.collection('collection1');
        collection.find({ '$text': {'$search' : keyword } } ).toArray(function(err, docs) {
        client.close();
        res.send(docs);
      });
      });
};



