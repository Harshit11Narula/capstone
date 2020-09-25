var express = require("express");
var router = express.Router();

var findCart = require("../controllers/deleteOne");

router.post("/", findCart);
module.exports = router;
