const express = require("express");
const router = express.Router();
const protectRoute = require("../middlewares/protectRoute");
const { getPost, createPost, deletePost, likeUnlikePost, replyToPost, getFeedPosts, getUserPosts } = require("../controllers/postController");

router.get("/feed", protectRoute, getFeedPosts);
router.get("/:id", getPost);
router.get('/user/:username', getUserPosts);
router.post("/create", protectRoute, createPost);
router.delete("/:id", protectRoute, deletePost);
router.put("/like/:id", protectRoute, likeUnlikePost);
router.put("/reply/:id", protectRoute, replyToPost);


module.exports = router;
