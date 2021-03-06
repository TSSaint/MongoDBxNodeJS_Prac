// For the space marked with a TODO comment below,
// write ONE LINE OF CODE that will cause only the
// name and number_of_employees fields to be returned
// in query results. To simplify, please do not assign
// your projection document to a variable as we
// did in the lesson. Instead, just type the correct
// projection document directly into the call to the
// appropriate method.

var MongoClient = require('mongodb').MongoClient,
    assert = require('assert');


MongoClient.connect('mongodb://localhost:27017/crunchbase', function(err, db) {

    assert.equal(err, null);
    console.log("Successfully connected to MongoDB.");

    var query = {"founded_year": 2010};

    var cursor = db.collection('companies').find(query);

    // literal projection method to be used in DB
    cursor.project({"name": 1, "number_of_employees": 1, "_id": 0});

    cursor.forEach(
        function(doc) {
            console.log(doc.name + " has " + doc.number_of_employees + " employees.");
        },
        function(err) {
            assert.equal(err, null);
            return db.close();
        }
    );

});
