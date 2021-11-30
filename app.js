const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

const {dataBaseConnection}=require("./database/mongodb")
dataBaseConnection();

var corsOptions = {
  origin: "http://localhost:5000"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Health OK"});
});

require("./routes")(app);


// set port, listen for requests
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
