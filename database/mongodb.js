const express = require("express");
const mongoose = require("mongoose"); // new

// Connect to MongoDB database
const dataBaseConnection = () => {
  mongoose
    .connect("mongodb://localhost:27017/meeting", { useNewUrlParser: true })
    .then(() => {
        console.log("Connected")
    });
};

module.exports={
    dataBaseConnection
}