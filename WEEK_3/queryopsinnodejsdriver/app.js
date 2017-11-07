// require mongodb, commanad-line-args, and assert packages
var MongoClient = require('mongodb').MongoClient;
var commandLineArgs = require('command-line-args');
var assert = require('assert');

// function commandLineOptions
var options = commandLineOptions();

MongoClient.connect('mongodb://localhost:27017/crunchbase', function(err, db) {

  assert.equal(err, null);
  console.log("Connected to MongoDB.");

  var query = queryDocument(options);
  // specific layout 'ask' for Mongo
  var projection = {"_id": 1, "name": 1, "founded_year": 1, "number_of_employees": 1, "crunchbase_url": 1};


  var cursor = db.collection('companies').find(query, projection);
  var numMatches = 0;

  cursor.forEach(
    function(doc) {
      numMatches = numMatches + 1;
      console.log(doc);
    },
    function(err) {
      assert.equal(err, null);
      console.log("Our query was:" + JSON.stringify(query));
      console.log("Matching documents: " + numMatches);
      return db.close();
    }
  );
});

function queryDocument(options) {
    console.log(options);
    var query = {
        "founded_year": {
            "$gte": options.firstYear,
            "$lte": options.lastYear
        }
    };

    if ("employees" in options) {
        query.number_of_employees = { "$gte": options.employees };
    }

    return query;
}

function commandLineOptions() {

    var cli = commandLineArgs([
        { name: "firstYear", alias: "f", type: Number },
        { name: "lastYear", alias: "l", type: Number },
        { name: "employees", alias: "e", type: Number }
    ]);

    var options = cli.parse()
    if ( !(("firstYear" in options) && ("lastYear" in options))) {
        console.log(cli.getUsage({
            title: "Usage",
            description: "The first two options below are required. The rest are optional."
        }));
        process.exit();
    }

    return options;

}


