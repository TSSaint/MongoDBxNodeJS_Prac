var MongoClient = require('mongodb').MongoClient,
    assert = require('assert');

MongoClient.connect('mongodb://localhost:27017/crunchbase', function(err, db) {

    assert.equal(err, null);
    console.log("Successfully connected to MongoDB.");

    // holds query for crunchbase db
    var query = {"category_code": "biotech"};
    // holds specific projection for db.crunchbase
    var projection = {"name": 1, "category_code": 1, "_id": 0};
    // tells cursor what to do
    var cursor = db.collection('companies').find(query);
    cursor.project(projection);

    // print each item recieved in query
    cursor.forEach(
        function(doc) {
            console.log(doc.name + " is a " + doc.category_code + " company.");
            console.log(doc);
        },
        // assertion test and function if fails
        function(err) {
            assert.equal(err, null);
            return db.close();
        }
    );

});
