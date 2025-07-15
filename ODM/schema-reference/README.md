# Mongoose Chocolate-Consumer Demo

This is a simple Node.js demo project using [Mongoose](https://mongoosejs.com/) to interact with a MongoDB database. It demonstrates how to:

- Define and use schemas with validation
- Create models and save documents to the database
- Set up relationships between collections using `ObjectId` references
- Use `populate()` to query and resolve referenced documents

## Models

### Chocolate

Represents a chocolate brand with the following fields:

- `brand`: (String) Required, unique, minimum 3 characters
- `ingredientCount`: (Number) Required, between 5 and 15
- `color`: (String) Optional

### Consumer

Represents a person who likes chocolates:

- `firstName`: (String) Required
- `lastName`: (String) Required
- `favorites`: (Array of ObjectId) References to `Chocolate` documents

## How It Works

The `runDemo()` function:

1. Connects to a local MongoDB instance (`sweets` database)
2. Creates two sample `Chocolate` records
3. Creates a `Consumer` who references those chocolates
4. Queries the consumer and uses `.populate()` to show full chocolate details
5. Closes the database connection

## Running the demo

Make sure MongoDB is running locally on port `27017`.

Then run:

```bash
node index.js
```

Note: You must have `mongoose` installed:

```bash
npm install mongoose
```
