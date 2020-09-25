var express = require("express");
var router = express.Router();

var findCart = require("../controllers/activeUser");

router.post("/", findCart);
module.exports = router;
