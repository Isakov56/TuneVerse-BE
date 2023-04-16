const express = require('express')
const request = require('request');
const cors = require('cors')
const listEndpoint = require('express-list-endpoints')
const { join } = require("path")
const services = require("./services");
const cookieParser = require("cookie-parser");
const mongoose = require('mongoose')
const {
    notFoundHandler,
    forbiddenHandler,
    badRequestHandler,
    genericErrorHandler,
} = require("./errorHandlers")

const server = express()

server.use(cors())
server.use(cookieParser());

const port = process.env.PORT || 3006

const staticFolderPath = join(__dirname, "../public")
server.use(express.static(staticFolderPath))
server.use(express.json())

server.use("/api", services);

server.use(badRequestHandler)
server.use(forbiddenHandler)
server.use(notFoundHandler)
server.use(genericErrorHandler)

console.log(listEndpoint(server))

server.use('/', (req, res) => {
  const url = 'https://api.deezer.com' + req.originalUrl;
  res.header('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
  req.pipe(request(url)).pipe(res);
});



mongoose.connect(process.env.MONGODB_CONNECTION, 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(
    server.listen(port, () => {
      console.log("Running on port", port)
    })
  )
  .catch((err) => console.log(err))

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Database connection successful");
});
