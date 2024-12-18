```javascript
// Incorrect use of $inc operator
db.collection('myCollection').updateOne({"_id": ObjectId("65196a98657498421e77b77c")}, {"$inc": {"counter": "1"}});
```