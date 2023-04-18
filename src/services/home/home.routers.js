const homeRoute = require("express").Router();
const {addToHome, getSpecificObject, getAllObjects} = require("./home.controllers");

homeRoute.post("/addToHome", addToHome);
homeRoute.get("/:objectId", getSpecificObject);
homeRoute.get("/", getAllObjects);

module.exports = homeRoute;
