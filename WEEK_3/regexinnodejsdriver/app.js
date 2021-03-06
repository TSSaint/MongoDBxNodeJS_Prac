var MongoClient = require('mongodb').MongoClient;
var commandLineArgs = require('command-line-args');
var assert = require('assert');

var options = commandLineOptions();

MongoClient.connect('mongodb://localhost:27017/crunchbase', function(err, db) {

  assert.equal(err, null);
  console.log("Successfully connected to MongoDB.");

  var query = queryDocument(options);
  var projection = projectionDocument(options);

  var cursor = db.collection('companies').find(query);
  cursor.project(projection);

  var numMatches = 0;

  cursor.forEach(
    function(doc) {
      numMatches = numMatches + 1;
      console.log(doc);
    },
    function(err) {
      assert.equal(err, null);
      console.log("QUERY WAS: " + JSON.stringify(query));
      console.log("MATCHED DOCS: " + numMatches);
      return db.close();
    }
  );
});

function queryDocument(options) {

  console.log(options);
  var query = {};
  if ("overview" in options) {
    query.overview = {"$regex": options.overview, "options": "i"};
  }

  return query;

}

function commandLineOptions() {

  var cli = commandLineArgs([
      { name: "overview", alias: "o", type: String }
    ]);

  var options = cli.parse()
  if (Object.keys(options).length < 1) {
    console.log(cli.getUsage({
      title: "USAGE",
      description: "NEED TO GIVE AN OPTION. SEE BELOW."
    }));
    process.exit();
  }

  return options;

}
