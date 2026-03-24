const fs = require("fs");
const path = require("path");
const { Webhook, WebhookVerificationError } = require("svix");
const User = require("../models/User.js");

const clerkWebhook = async (req, res) => {
    try {
        // Save raw payload to file for debugging
        const logPath = path.join(__dirname, "../log.json");
        fs.writeFileSync(logPath, req.body.toString());  // req.body هنا Buffer

        console.log("✅ Raw payload saved to log.json");

        // ---------------------------
        // هنا تقدر تكمل بالـ verify والداتا
        // ---------------------------

        const webhook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);
        const headers = {
            "svix-id": req.headers["svix-id"],
            "svix-signature": req.headers["svix-signature"],
            "svix-timestamp": req.headers["svix-timestamp"],
        };

        const evt = webhook.verify(req.body, headers);
        const { data, type } = evt;

        console.log("📩 Event type:", type);
        console.log("📦 Data:", data);

        return res.status(200).json({ success: true, received: true });

    } catch (err) {
        console.error("❌ Webhook error:", err);
        if (err instanceof WebhookVerificationError) {
            return res.status(400).json({ success: false, error: "Invalid webhook signature" });
        }
        return res.status(500).json({ success: false, error: err.message });
    }
};

module.exports = clerkWebhook;
