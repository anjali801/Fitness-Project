const express = require("express");
const connectDB = require("./config/db.js");
const authRoutes = require("./routes/auth.routes.js");
const exerciseRoutes = require("./routes/exercise.routes.js");

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/", authRoutes);
app.use("/", exerciseRoutes);

app.get("/", (req, res) => res.render("home"));
app.get("/login", (req, res) => res.render("login"));
app.get("/signup", (req, res) => res.render("signup"));
app.get("/male", (req, res) => res.render("male"));
app.get("/female", (req, res) => res.render("female"));
app.get("/child", (req, res) => res.render("child"));

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
