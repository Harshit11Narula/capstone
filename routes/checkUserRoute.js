var express = require("express");
var router = express.Router();

var findCart = require("../controllers/checkUser");

router.post("/", findCart);
module.exports = router;
