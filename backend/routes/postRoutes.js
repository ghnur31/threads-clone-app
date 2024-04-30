const express = require("express");
const router = express.Router();
const protectRoute = require("../middlewares/protectRoute");
const { getPost, createPost, deletePost, likeUnlikePost, replyToPost, getFeedPosts } = require("../controllers/postController");

router.get("/feed", protectRoute, getFeedPosts);
router.get("/:id", getPost);
router.post("/create", protectRoute, createPost);
router.delete("/:id", protectRoute, deletePost);
router.post("/like/:id", protectRoute, likeUnlikePost);
router.post("/reply/:id", protectRoute, replyToPost);


module.exports = router;
