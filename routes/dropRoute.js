var express = require("express");
var router = express.Router();

var drop = require("../controllers/dropController");

router.post("/", drop);
module.exports = router;
