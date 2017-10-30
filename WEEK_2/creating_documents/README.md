# Inserting Documents

### Manual Inserts
It is possible to send multiple documents for use into MongoDB by inserting specific documents.

A common syntax for this is:
#### Single
```js
db.some_database.insertOne({ "somekey":"somedata"});
```
<br> or
#### Many
note: This method needs an array passed into the function
```js
db.some_database.insertMany({
    [
        {
	    "somekey0" : "somedata0",
        },
        {
	    "somekey1" : "somedata1",
        }
    ]
    }); 

### Uniqueness of Underscored Ids
MongoDB does not allow documents in collections/databases to share Ids. They must be unique, or will compile an error. If an insert command shares an id among multiple documents, the command will only insert documents in MongoDB until the error occurs. However, a Mongo command can be specified to keep running.
Ex.
```js
( 
{[
    ...data
]},
{ "ordered":"false"}
);
```

### Understanding the _id field
MongoDB stores an _id value for each document in a collection by default. Secondary indexes are possible though.

#### ObjectId:
MongoDB creates a 12-byte hex string of ObjectId:
[ 4 ]: Date
[ 3 ]: Mac Address
[ 2 ]: PID
[ 3 ]: Counter

# Reading Documents
We can always specify queries in a database for specific values using "find()".

We can find specific items by specifying a key and a value.
Ex. db.x.find({ somekey: "someval" });

# Equality Matches
We can use count() and find() to specify values - additionally, we may use dot notation to specify within documents/arrays. We can keep going several layers deep by specifying more and more "."s.
Ex. db.x.find({ somekey.specific: "someval" });

We can even query documents where specific arrays have a specific place value. 
Ex. db.x.find({ somekey.0: "someval" }) returns the document where "someval" is the first item in somekey

### On Arrays
We can specify equality matches on arrays by:
- Querying the whole array
- Specifying an element
- Specifying a 'specific' element
- Using complex matches with operators(ex. <=, !=)

#### Using Projections
A good technique for parsing data is to use projections, or querying for specific keys - as opposed to querying a collection for entire documents. 

We can explicitly include and remove fields in documents returned with the ObjectId field by default. Adding an _id: 0 in the projection argument removes the key.

Ex. db.x.find({ somekey: 999 }, { anotherkey: "value_string" });

# ADVANCED Query Selectors
For more info, visit: https://docs.mongodb.com/manual/reference/operator/query/

### Comparison
These operators allow us to match a query's requested value based on ranges or depending on the inclusion of a string/phrase.

We can express a specific range:
Ex. db.x.find({ runtime: { $gt: 90 } }).pretty();

We can express ranges:
Ex. db.x.find({ runtime: { $gt: 90, $lt: 120 } }).pretty();

#### Some Popular Comparison Operators:
$eq - equal to
$gt - greater than
$gte - greater than or equal to
$lt - less than
$lte - less than or equal to
$ne - NOT equal to
$in - anything that specifies inside

This is an example of a relatively complicated query that asks for highly specific data to be returned:
```js
db.movieDetails.find({ "tomato.meter" : { $gte: 95}, runtime: { $gt: 90, $lt: 120 } }, { title: 1, runtime: 1, _id: 0}).pretty();

```

Here, we are asking MongoDB to search inside the "movieDetails" collection. Then, we are saying that we want to see all documents with a tomato.meter value GREATER THAN OR EQUAL TO 95 and a runtime value GREATER THAN 90 and LESS THAN 120. Finally, we are projecting the query to include only movie titles, the runtime of the films, and not to return the default ObjectId - returned in a "pretty" way.

