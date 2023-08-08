const express = require("express");
const router = express.Router();
const routesPhone = require("./phone")
const routerUser = require("./user");

router.use("/phone", routesPhone)
router.use("/user", routerUser)

module.exports = router;




