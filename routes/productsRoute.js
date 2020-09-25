var express = require("express");
var router = express.Router();

var productsControllers = require("../controllers/productsControllers");

router.post("/", productsControllers);
module.exports = router;
