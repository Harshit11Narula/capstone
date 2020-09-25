var express = require("express");
var router = express.Router();

var pageControllers = require("../controllers/productPage");

router.post("/", pageControllers);
module.exports = router;
