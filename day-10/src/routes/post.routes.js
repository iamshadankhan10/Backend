const express = require("express");
const postRouter = express.Router();
const postController = require("../controllers/post.controller");
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });
const identifyUser = require("../middlewares/auth.middleware").identifyUser;

/*
    Route: /api/posts/ [protected]
    -req.body = {caption, img_url}
    Method: POST
*/
postRouter.post("/", upload.single("image"), identifyUser,  postController.createPostController);

/**
 * GET /api/posts/ [protected]
 */

postRouter.get("/", identifyUser, postController.getPostController);

/**
 * GET /api/posts/details/:postId
 * - return a detail about specific post with the id, also check whether the post belongs to the user that is request come from.
 */

postRouter.get("/details/:postId", identifyUser, postController.getPostDetailsController);


module.exports = postRouter;