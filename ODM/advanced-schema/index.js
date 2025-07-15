const mongoose = require("mongoose");

// Define schema
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

// we can attach function to the schema on the methods property. Remember not to use arrow functions so "this" can work properly
chocolateSchema.methods.isDelicious = function () {
  return `It is amazing and I like the color ${this.color}`;
};

// with the virtual property on the schema we can attach virtual properties not existing in the database, they are just to get some end result
// don't use arrow function here because we need to keep 'this'
chocolateSchema.virtual("description").get(function () {
  return `It contains ${this.ingredientCount} ingredients and color ${this.color}`;
});

// we can validate to data we send to the database by using path and validate properties. The path property is a column from the database
chocolateSchema.path("color").validate(function () {
  return this.color && this.color.length >= 2 && this.color.length <= 10;
}, "Color must be between 2 and 10 characters long!");

const Chocolate = mongoose.model("Chocolate", chocolateSchema);

// Run demo using async/await
async function runDemo() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/sweets");
    console.log("Connected to MongoDB");

    // Create and save a new chocolate
    const newSweet = new Chocolate({
      brand: "DeliteBar",
      ingredientCount: 12,
      color: "purple",
    });

    await newSweet.save();
    console.log("Chocolate saved");

    // Query the chocolate and use custom method and virtual
    const choco = await Chocolate.findOne({ brand: "DeliteBar" });

    if (choco) {
      console.log("Custom method output:", choco.isDelicious());
      console.log("Virtual property output:", choco.description);
    } else {
      console.log("No chocolate found");
    }
  } catch (error) {
    console.error("Error:", error.message);
  } finally {
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB");
  }
}

runDemo();
