const express = require("express");
const protectRoute  = require("../middlewares/protectRoute");
const { getConversations, getMessages, sendMessage } = require("../controllers/messageController");

const router = express.Router();

router.get("/conversations", protectRoute, getConversations);
router.get("/:otherUserId", protectRoute, getMessages);
router.post("/", protectRoute, sendMessage);

module.exports = router;