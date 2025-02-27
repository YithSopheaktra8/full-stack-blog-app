import { Webhook } from "svix";
import userModel from "../models/user.model.js";

export const clerkWebhook = async (req, res) => {
    const WEB_HOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

    if(!WEB_HOOK_SECRET) {
       throw new Error('Webhook secret is not set');
    }

    const payload = req.body;
    const headers = req.headers;

    const wh = new Webhook(WEB_HOOK_SECRET);
    let event;
    try {
        event = wh.verify(payload, headers);
    } catch (err) {
        res.status(400).json({
            message: "Webhook verification failed",
        });
    }

    if(event.type === 'user.created') {
        // Do something with the user created event
        const newUser = new userModel({
            clerkUserId : event.data.id,
            username : event.data.username || event.data.email_addresses[0].email_address,
            email : event.data.email_addresses[0].email_address,
            img : event.data.image_url,
        })

        try {
            await newUser.save();
        } catch (error) {
            res.status(500).json({
                message: "Failed to save user to database",
            });
        }

    }

    return res.status(200).json({
        message: "Webhook received",
    });

};