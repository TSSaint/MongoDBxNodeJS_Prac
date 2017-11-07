// require Mongo and assert npm packages
var Mongo = require('mongodb').Mongo;
var assert = require('assert');

Mongo.connect('mongodb://localhost:27017/crunchbase', function(err, db) {

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
