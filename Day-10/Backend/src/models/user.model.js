const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: [true, "Username already exists"],
        required: true
    },
    email :{
        type: String,
        unique: [true, "Email already exists"],
        required: true
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    bio: String,

    profileImage: {
        type: String,
        default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
    },

    /**
     * followers and following are
     * arrays of ObjectIds that reference
     * the users collection. This allows us to easily retrieve the followers and following 
     * of a user by populating these fields when querying the database.
     * 1 follower -> 12 bytes
     */
    followers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    }],
    following: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    }]
})

const userModel = mongoose.model("users", userSchema)

module.exports = userModel;