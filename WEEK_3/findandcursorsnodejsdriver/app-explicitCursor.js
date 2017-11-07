// require Mongo and assert npm packages
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

MongoClient.connect('mongodb://localhost:27017/crunchbase', function(err, db) {

    assert.equal(err, null);
    console.log("Successfully connected to MongoDB.");

    var query = {"category_code": "biotech"};

    var cursor = db.collection('companies').find(query);

    cursor.forEach(
        function(doc) {
            console.log( doc.name + " is a " + doc.category_code + " company." );
        },
        function(err) {
            assert.equal(err, null);
            return db.close();
        }
    );

});
