var express = require("express");
var router = express.Router();

var drop = require("../controllers/findOrder");

router.post("/", drop);
module.exports = router;
