//Importing and creating an instance of express
const express = require("express");
const app = express();

//Setting PORT to 5000 if PORT is not listed in environmental variables.
const PORT = process.env.PORT || 5000;

// Creating the `GET` route
app.get("/", (req, res) => {
  res.send("<h1>Welcome Friends</h1>");
});

//Starting the express server
app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
