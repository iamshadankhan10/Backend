const express = require("express");
const authRouter = express.Router();
const authController = require("../controllers/auth.controller");
const identifyUser = require("../middlewares/auth.middleware").identifyUser;

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

/**
 * @route GET /api/auth/get-me
 * @desc Get the authenticated user's information
 * @access Private
 */
authRouter.get("/get-me", identifyUser, authController.getMeController);



module.exports = authRouter;
