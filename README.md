# MongoDB $inc Operator Error

This example demonstrates an error that occurs when using the `$inc` operator in MongoDB with an incorrect data type.  The `$inc` operator is used to increment a numeric field by a specified value.  However, if a string is used, it will result in an error because `$inc` requires a number.

## Steps to Reproduce

1.  Create a MongoDB collection with a numeric field (e.g., `counter`).
2.  Attempt to increment the field using `$inc` with a string value.

## Solution

The solution is to ensure that the value used with `$inc` is a number, not a string.