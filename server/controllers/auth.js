import bcrypt from "bcrypt";
import jwt from "jasonwebtoken";
import user from "../models/User.js";
import User from "../models/User.js";

//Register User
export const register = async (req, res) => {
    try {
        const {
            firstName,
            lastName,
            email,
            password,
            picturePath,
            friends,
            location,
            occupation,
        } = req.body;

        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        const newUser = new User({
            firstName,
            lastName,
            email,
            password,
            picturePath,
            friends,
            location,
            occupation,
            viewedProfile: Math.floor(Math.random() * 100000),
            impressions: Math.floor(Math.random() * 10000)
        })
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }

//ATTENTION- TO PICK UP HERE!!! -ATTENTION 

}