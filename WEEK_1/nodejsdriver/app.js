var MongoClient = require('mongodb').MongoClient,
    assert = require('assert');

var url = 'mongodb://localhost:27017/video';

MongoClient.connect(url, function(err, db) {

    assert.equal(null, err);
    console.log("Successfully connected to server");

    // Find docs
    db.collection('movies').find({}).toArray(function(err, docs) {

        // Print docs
        docs.forEach(function(doc) {
            console.log(doc.title);
        });

        // Close db
        db.close();
    });

    // successful note
    console.log("Called find()");
});
