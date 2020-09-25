var express = require("express");
var router = express.Router();

var insert = require("../controllers/orderHistory");

router.post("/", insert);
module.exports = router;
