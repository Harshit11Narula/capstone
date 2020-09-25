var express = require("express");
var router = express.Router();

var searchControllers = require("../controllers/searchCartControllers");

router.post("/", searchControllers);
module.exports = router;
