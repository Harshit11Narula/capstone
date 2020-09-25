var express = require("express");
var router = express.Router();

var updateControllers = require("../controllers/updateCartControllers");

router.post("/", updateControllers);
module.exports = router;
