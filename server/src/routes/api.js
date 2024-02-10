const express = require("express");
const APIController = require("../controller/api.js");
const routes = express.Router();

routes.post("/", APIController.getCountJobs);

module.exports = routes;