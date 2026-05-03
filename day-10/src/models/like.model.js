const mongoose = require("mongoose");

const likeSchema = new mongoose.Schema(
  {
    postId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "posts",
      required: [true, "Post id is required for createing a like"],
    },
    username: {
      type: String,
      required: [   true, "Username is required for creating a like"],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

likeSchema.index({ postId: 1, username: 1 }, { unique: true });

const likeModel = mongoose.model("likes", likeSchema);

module.exports = likeModel;