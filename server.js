//Importing and creating an instance of express
const express = require("express");
const app = express();

//Setting PORT to 5000 if PORT is not listed in environmental variables.
const PORT = process.env.PORT || 5000;

const mongoose = require('mongoose');
const bioSchema = new mongoose.Schema({name: String, age: Number})

const bio = mongoose.model('name', bioSchema);

// Gets the Username and Password
const MONGO_URI = `mongodb://${process.env.MONGO_INITDB_ROOT_USERNAME}:${process.env.MONGO_INITDB_ROOT_PASSWORD}@mongo:27017`;

// Creating the connect function
const connectDB = async () => {
  await mongoose
    .connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Mongo connected successfully"))// Logs out successful when MongoDB connects.
    .catch((e) => {
      console.log(e.message);// Logs out the error message if it encounters any.
    });
};

// Calling the Connect Function
connectDB();

// Creating the `GET` route
app.get("/", async (req, res) => {
  console.log("here are params", req.query)

  const getBio = new bio({ name: req.query.name, age: req.query.age });
  await getBio.save()

  const allbio = await bio.find();
  console.log(allbio);

  res.send("<h1>Welcome Friends</h1>");
});

//Starting the express server
app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
