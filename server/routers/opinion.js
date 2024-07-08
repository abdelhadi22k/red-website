import express from "express";
import Opinions from "../model/opinion.js";

const router = express.Router();

router.get("/", async (req, res) => {
    const opinion = await Opinions.find();
    res.send(opinion);
});

router.post("/addOpinion", async (req, res) => {
    const opinion = new Opinions({
        opinion: req.body.opinion,
        clientName: req.body.clientName,
        JobTitle: req.body.JobTitle,
        ratings: req.body.ratings,
        allow: req.body.allow,
    });
    await opinion.save();
    res.send(opinion);
});

router.put("/:id", async (req, res) => {
    const opinion = await Opinions.findByIdAndUpdate(
        req.params.id,
        {
            opinion: req.body.opinion,
            clientName: req.body.clientName,
            JobTitle: req.body.JobTitle,
            ratings: req.body.ratings,
            allow: req.body.allow,
        },
        { new: true }
    );
    if (!opinion) {
        return res.status(404).send(`we don't have her this Product`);
    }
    res.send(opinion); 
});
 
router.delete("/:id", async (req, res) => {
    const opinion = await Opinions.findByIdAndRemove(req.params.id);

    if (!opinion) {
        return res.status(404).send(`we don't have her this project `);
    }
    res.send(opinion);
});

export default router;
