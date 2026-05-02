const express = require('express');
const userController = require('../controllers/user.controller');
const identifyUser = require('../middlewares/auth.middleware').identifyUser;

const userRouter = express.Router();

/**
 * @route POST /api/users/follow/:userid
 * @description Follow a user
 * @access Private 
 */
userRouter.post('/follow/:username', identifyUser, userController.followUserController);

module.exports = userRouter;