const express = require("express");
const { register, login } = require("../controller/registration.js");
console.log(login, register)
const routes = express.Router();
routes.post("/register", register);
routes.post("/login", login);
module.exports = routes;
