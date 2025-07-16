# Mongoose

## Why Mongoose?

In this repository, we use **Mongoose** as the default ODM for MongoDB.

Mongoose is a powerful and popular Node.js library that makes working with MongoDB easier by:

- Providing schema definitions for your documents
- Enabling data validation, default values, and relationships
- Simplifying CRUD operations with a clean API

## Additional info

### projection

**Projection** in MongoDB (and Mongoose) is all about **controlling which fields are returned** in a query result. It's a key tool for performance and data shaping.

Projection lets you specify which fields you want to:

- **Include** (e.g. only return specific fields)
- **Exclude** (e.g. hide certain fields like passwords)

### `runValidators``

In Mongoose, schema validation is **automatically applied on** `save()`, but **NOT by default** on update operations like:

- `Model.updateOne()`
- `Model.updateMany()`
- `Model.findOneAndUpdate()`
- `Model.findByIdAndUpdate()`

To ensure validation rules from your schema are applied during these updates, you need to explicitly pass: `{ runValidators: true }`
