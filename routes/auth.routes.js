const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/user.model.js");

const router = express.Router();

// Signup Route
router.post("/signup", async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).send("All fields are required!");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();
        res.redirect("/login");
    } catch (error) {
        res.status(500).send("Error signing up.");
    }
});

// Login Route
router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
        return res.status(400).send("User not found!");
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(400).send("Incorrect password!");
    }

    res.redirect("/");
});

module.exports = router;
