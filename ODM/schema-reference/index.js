const mongoose = require("mongoose");

// this is our schema which works as validation on data we receive and specify what columns of data we will have. Properties in the schema object are columns in database
const chocolateSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: true,
    minlength: 3,
    unique: true,
  },
  ingredientCount: {
    type: Number,
    required: true,
    min: 5,
    max: 15,
  },
  color: {
    type: String,
  },
});
// here we tell that how our Collection in database will be called, in this example is Chocolate
const Chocolate = mongoose.model("Chocolate", chocolateSchema);

// this schema has third property eat which will be of type as another schema. Which means for eat property we need to provide records from the Chocolate collection
const consumerSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  favorites: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Chocolate",
    },
  ],
});
const Consumer = mongoose.model("Consumer", consumerSchema);

// Async function to run the demo
async function runDemo() {
  try {
    // Connect to MongoDB
    await mongoose.connect("mongodb://127.0.0.1:27017/sweets");
    console.log("Connected to MongoDB");

    // Create and save some chocolate records
    const chocolate1 = new Chocolate({
      brand: "ChocoLuxe",
      ingredientCount: 7,
      color: "dark",
    });

    const chocolate2 = new Chocolate({
      brand: "SweetLeaf",
      ingredientCount: 10,
      color: "milk",
    });

    await chocolate1.save();
    await chocolate2.save();

    console.log("Chocolates saved");

    // Create and save a consumer who likes these chocolates
    const consumer = new Consumer({
      firstName: "Alex",
      lastName: "Johnson",
      favorites: [chocolate1._id, chocolate2._id],
    });

    await consumer.save();
    console.log("Consumer saved");

    // Populate and display the consumer’s favorite chocolates
    const result = await Consumer.findOne({ firstName: "Alex" }).populate(
      "favorites"
    );
    console.log("Consumer with populated chocolates:", result);
  } catch (error) {
    console.error("Error:", error);
  } finally {
    // Close the connection
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB");
  }
}

// Run the demo
runDemo();
