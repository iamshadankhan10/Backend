const express = require("express");
const authRouter = express.Router();
const authController = require("../controllers/auth.controller");

/*
    Route: /api/auth/register
    Method: POST
*/
authRouter.post("/register", authController.registerController);

/*
    Route: /api/auth/login
    Method: POST
*/
authRouter.post("/login", authController.loginController);

module.exports = authRouter;



module.exports = authRouter;
