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





