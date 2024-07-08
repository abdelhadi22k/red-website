import express from "express";
import Img from "../model/img.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const img = await Img.find();
  res.send(img);
});



router.get("/:id", async (req, res) => {
  const img = await Img.findById(req.params.id);
  if (img) {
    res.send(img);
  } else {
    res.status(404).send({ message: "img Not Found" });
  }
});

router.post("/addImg", async (req, res) => {
  const img = new Img({
  imgs: req.body.imgs,
  });
  await img.save();
  res.send(img);
  
}); 

router.delete("/:id", async (req, res) => {
    const img = await img.findByIdAndRemove(req.params.id);
    if (!img) {
      return res.status(404).send(`we don't have her this img `);
    }
    res.send(img);
  });




export default router;
