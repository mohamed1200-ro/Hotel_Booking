const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db.js");
const { clerkMiddleware } = require("@clerk/express");
const clerkWebhook = require("./controllers/clerkWebHooks.js");
const User = require("./models/User.js");

// Load env
dotenv.config();
connectDB();

const app = express();
app.use(cors());

// مهم: raw body للـ webhook
app.post("/api/clerk/webhook", express.raw({ type: "application/json" }), clerkWebhook);

// باقي الروتس بعدين
app.use(express.json());
app.use(clerkMiddleware());

// Debug users
app.get("/api/users", async (req, res) => {
    const users = await User.find({});
    res.json(users);
});

app.get("/", (req, res) => res.send("API is Working"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
