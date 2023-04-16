const services = require("express").Router();

const { postRoute } = require("./post");
const { questionRoute } = require("./question");
const { homeRoute } = require("./home");
const userRouter = require("./users/user.routers");

services.use("/posts", postRoute);
services.use("/questions", questionRoute);
services.use("/users", userRouter);
services.use("/home", homeRoute);
module.exports = services;

