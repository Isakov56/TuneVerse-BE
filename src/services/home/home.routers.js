const homeRoute = require("express").Router();
const {addToHome, getSpecificObject} = require("./home.controllers");

homeRoute.post("/addToHome", addToHome);
homeRoute.get("/:name", getSpecificObject);

module.exports = homeRoute;
