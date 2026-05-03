const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    caption: {
        type: String,
        default: ""
    },
    img_url: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: [ true, "Post must belong to a user" ]
    }
}, {timestamps: true});

const postModel = mongoose.model("posts", postSchema);

module.exports = postModel;