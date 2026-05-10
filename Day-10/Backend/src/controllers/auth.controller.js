const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function loginController(req,res){
    const {username, email, password} = req.body;

    const user = await userModel.findOne({
        $or: [
            {username: username},
            {email: email}
        ]
    });

    if(!user){
        return res.status(404).json({message: "User not found"});
    }

    const ispasswordValid = await bcrypt.compare(password, user.password);

    if(!ispasswordValid){
        return res.status(401).json({
            message: "Invalid credentials"
        });
    }

    const token = jwt.sign({
        id: user._id,
        username: user.username
    }, process.env.JWT_SECRET, {expiresIn: "1d"});

    res.cookie("token", token);

    res.status(200).json({
        message: "User logged in successfully",
        user: {
            username: user.username,
            email: user.email,
            bio: user.bio,
            profileImage: user.profileImage
        }
    });
}

async function registerController(req,res){
    const {email, username, password, bio, profileImage} = req.body;

    // const isUserExistByEmail = await userModel.findOne({email});

    // if(isUserExistByEmail){
    //     return res.status(409).json({message: "User with this email already exists"});
    // }

    // const isUserExistsByUsername = await userModel.findOne({username});

    // if(isUserExistsByUsername){
    //     return res.status(409).json({message: "User with this username already exists"});
    // }


    // Yaha pe bss ek baaar hi humne database ko query kiya hai instead of 2 baar, isse performance improve hoti hai
    const isUserAlreadyExists = await userModel.findOne({
        $or: [
            {email},
            {username}
    ]});

    if(isUserAlreadyExists){
        return res.status(409)
        .json({
            message: "User already exists" + (isUserAlreadyExists.email==
                email ? "Email already exists" : "Username already exists")
        });
    }

    const hash = await bcrypt.hash(password, 10);

    const user = await userModel.create({
        username,
        email,
        bio,
        profileImage,
        password: hash
    });

    const token = jwt.sign({
        id: user._id,
        username: user.username
    }, process.env.JWT_SECRET, {expiresIn: "1d"});

    res.cookie("token", token);

    res.status(201).json({
        message: "User registered successfully",
        user: {
            username: user.username,
            email: user.email,
            bio: user.bio,
            profileImage: user.profileImage
        }
    });
}

async function getMeController(req,res){
    const userId = req.user.id;

    const user = await userModel.findById(userId);

    res.status(200).json({
        message: "User fetched successfully",
        user: {
            username: user.username,
            email: user.email,
            bio: user.bio,
            profileImage: user.profileImage
        }
    });
}

async function getMeController(req, res) {
    const userId = req.user.id;

    const user = await userModel.findById(userId);

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
        message: "User fetched successfully",
        user: {
            username: user.username,
            email: user.email,
            bio: user.bio,
            profileImage: user.profileImage
        }
    });
}

module.exports = {
    loginController,
    registerController,
    getMeController,
};
