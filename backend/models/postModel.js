const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  text: {
    type: String,
    maxLength: 500,
  },
  img: {
    type: String,
  },
  likes: {
    // array of user ids
    type: [mongoose.Schema.Types.ObjectId],
    ref: "User",
    default: [],
  },
  replies: [
    {
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      text: {
        type: String,
        required: true,
      },
      userProfilePic: {
        type: String,
      },
      username: {
        type: String,
      },
    },
  ],
},
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Post", postSchema)