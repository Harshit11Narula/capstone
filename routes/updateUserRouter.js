var express = require("express");
var router = express.Router();

var updateControllers = require("../controllers/updateUser");

router.post("/", updateControllers);
module.exports = router;
