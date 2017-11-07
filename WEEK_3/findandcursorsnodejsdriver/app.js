// require Mongo and assert npm packages
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

MongoClient.connect('mongodb://localhost:27017/crunchbase', function(err, db) {

  assert.equal(err, null);
  console.log("Succesfully connected to MongoDB.");

  var query = {"category_code": "biotech"};

  db.collection('companies').find(query).toArray(function(err, docs) {

    assert.equal(err, null);
    assert.notEqual(docs.length, 0);

    docs.forEach(function(doc) {
      console.log( doc.name + "is a " + doc.category_code + " company.");
    });

    db.close();

  });

});

// get $ node app.js
// Succesfully connected to MongoDB.
// 23andMeis a biotech company.
// Genentechis a biotech company.
// Nutra Pharmais a biotech company.
// Posit Scienceis a biotech company.
