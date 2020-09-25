var express = require("express");
var router = express.Router();

var insertUser = require("../controllers/insertuser");

router.post("/", insertUser);
module.exports = router;
