var express = require("express");
var router = express.Router();

var cart = require("../controllers/cartControllers");

router.post("/", cart);
module.exports = router;
