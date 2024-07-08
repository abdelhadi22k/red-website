import express from "express";
import Project from "../model/project.js";
import expressAsyncHandler from "express-async-handler";

const router = express.Router();

router.get("/", async (req, res) => {
  const project = await Project.find();
  res.send(project);
});

router.get(
  "/categories",
  expressAsyncHandler(async (req, res) => {
    const project = await Project.find().distinct("category");
    res.send(project);
  })
);

router.get("/:id", async (req, res) => {
  const project = await Project.findById(req.params.id);
  if (project) {
    res.send(project);
  } else {
    res.status(404).send({ message: "Project Not Found" });
  }
});   

router.post("/addProject", async (req, res) => {
  try {
    // التحقق من عدم وجود مشروع بنفس العنوان
    const existingProject = await Project.findOne({ title: req.body.title });
    if (existingProject) {
      return res.status(400).send({ message: "Project with the same title already exists" });
    }

    const project = new Project({
      projectImg: req.body.projectImg,
      title: req.body.title,
      category: req.body.category,
      projectLink: req.body.projectLink,
      description: req.body.description,
      tags: req.body.tags,
    });
    await project.save();
    res.send(project);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}); 

router.put("/:id", async (req, res) => {
  const project = await Project.findByIdAndUpdate(
    req.params.id,
    {
      projectImg: req.body.projectImg,
      title: req.body.title,
      category: req.body.category,
      projectLink: req.body.projectLink,
      description: req.body.description,
      tags: req.body.tags,
    },
    { new: true }
  );
  if (!project) {
    return res.status(404).send(`we don't have her this Product`);
  }
  res.send(project);
});


router.delete("/:id", async (req, res) => {
    const project = await Project.findByIdAndRemove(req.params.id);
  
    if (!project) {
      return res.status(404).send(`we don't have her this project `);
    }
    res.send(project);
  });




export default router;
