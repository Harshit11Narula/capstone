var express = require("express");
var router = express.Router();

var insertCart = require("../controllers/insertCartControllers");

router.post("/", insertCart);
module.exports = router;
