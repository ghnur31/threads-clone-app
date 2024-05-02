const express = require("express");
const { signupUser, loginUser, followUnFollowUser, updateUser, getUserProfile, logoutUser, } = require("../controllers/userController");
const router = express.Router();
const protectRoute = require("../middlewares/protectRoute");

router.get('/profile/:query', getUserProfile);
router.post('/signup', signupUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser);
router.post('/follow/:id', protectRoute, followUnFollowUser);
router.put('/update/:id', protectRoute, updateUser);


module.exports = router;