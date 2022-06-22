const express = require("express");
const router = express.Router();
const EmployeeValidationRules = require("../validation-rules/user.rule");
const validateMiddleware = require("../middlewares/validate.middleware");
const UserController = require("../controllers/user.controller");
// below line has to be added in every route file
// this is perhaps some bug in express-async-errors
// adding below line only once in index.js doesn't works
require("express-async-errors");

router.get("/", UserController.getAll);
router.get("/:id", UserController.show);
router.post("/", validateMiddleware(EmployeeValidationRules.create), UserController.create);

module.exports = router;