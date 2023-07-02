const express = require("express")
const userRouter = express.Router()
const jwt = require("jsonwebtoken")
const { userModel } = require("../Model/user.model")
const bcrypt = require("bcrypt");
userRouter.post("/register", async (req, res) => {
    try {
        const { firstname, lastname, email, password } = req.body;

        // Check if user with the email already exists
        const existingUser = await userModel.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        bcrypt.hash(password, 5, async (err, hash) => {
            if (err) {
                return res.status(500).json({ message: "Something went wrong" });
            }

            const user = new userModel({
                email,
                password: hash,
                firstname,
                lastname
            });

            await user.save();

            res.status(201).json({ message: "Account created successfully!" });
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


userRouter.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email });

        console.log(user, "line41")
        if (user) {
            bcrypt.compare(password, user.password, (err, result) => {
                if (result) {
                    const token = jwt.sign(
                        { userId: user._id, userName: user.firstname },
                        "userAuth"
                    );
                    res.status(200).json({
                        message: "Login Successfull",
                        token,
                        userName: user.firstname,
                        userId: user._id,
                    });

                } else {
                    res.status(401).json({ message: "Wrong Credentials" })
                }
            });

        } else {
            res.status(401).json({ message: "User Does not Exists" })
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

module.exports = { userRouter };