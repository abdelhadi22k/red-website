import express from "express";
import Message from "../model/message.js";

const router = express.Router();

router.get("/", async (req, res) => {
    const message = await Message.find();
    res.send(message);
});

router.post("/addMessage", async (req, res) => {
    try {
        const existingEmail = await Message.findOne({ email: req.body.email });

        if (existingEmail) {
            return res.status(400).send(`This email has already been sent`);
        }

        const message = new Message({
            message: req.body.message,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            subject: req.body.subject,
            phoneNumber: req.body.phoneNumber,
        });
        await message.save();
        res.send(message);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

router.put("/:id", async (req, res) => {
    const message = await Message.findByIdAndUpdate(
        req.params.id,
        {
            message: req.body.message,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            subject: req.body.subject,
            phoneNumber: req.body.phoneNumber,
        },
        { new: true }
    );
    if (!message) {
        return res.status(404).send(`we don't have her this message`);
    }
    res.send(message);
});

router.delete("/:id", async (req, res) => {
    const message = await Message.findByIdAndRemove(req.params.id);

    if (!message) {
        return res.status(404).send(`we don't have her this message `);
    }
    res.send(message);
});

export default router;
