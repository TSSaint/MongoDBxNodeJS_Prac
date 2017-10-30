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

