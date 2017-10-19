var MongoClient = require("mongodb").MongoClient
var assert = require("assert");

var url = "mongodb://localhost:27017/video";

MongoClient.connect(url, function(err, db) {
  
  assert.equal(null, err);
  console.log("Successfully connected to server on ${url}!");
  
  // find documents in collection db
  db.collection("movies").find({}).toArray(function(err, docs) {
    
    // print the docs
    docs.forEach(function(doc) {
      console.log(doc.title);
    });
    
    // close db
    db.close();
  });

  // So far so good (y)
  console.log("Successfully called called find()");
});
