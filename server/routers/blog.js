import express from "express";
import Blog from "../model/blog.js";
import expressAsyncHandler from "express-async-handler";

const router = express.Router();



router.get("/", async (req, res) => {
  const blog = await Blog.find();
  res.send(blog);
});

const PAGE_SIZE = 3;

router.get(
  "/search",
  expressAsyncHandler(async (req, res) => {
    const { query } = req;
    const pageSize = query.pageSize || PAGE_SIZE;
    const page = query.page || 1;
    const category = query.category || "";
    const searchQuery = query.query || "";

    const queryFilter =
      searchQuery && searchQuery !== "all"
        ? {
            title: {
              $regex: searchQuery,
              $options: "i",
            },
          }
        : {};
    const categoryFilter = category && category !== "all" ? { category } : {};
   
    const blogs = await Blog.find({
      ...queryFilter,
      ...categoryFilter,
    })
      .skip(pageSize * (page - 1))
      .limit(pageSize);

    const countBlog = await Blog.countDocuments({
      ...queryFilter,
      ...categoryFilter,
    });
    res.send({
      blogs,
      countBlog,
      page,
      pages: Math.ceil(countBlog / pageSize),
    });
  })
);



router.get(
  "/categories",
  expressAsyncHandler(async (req, res) => {
    const blog = await Blog.find().distinct("category");
    res.send(blog);
  })
);

router.get(
  "/categories/:category",
  expressAsyncHandler(async (req, res) => {
    const category = req.params.category;
    try {
      const blogs = await Blog.find({ category: category });
      res.send(blogs);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  })
);

router.get("/slug/:slug", async (req, res) => {
  const blog = await Blog.findOne({ slug: req.params.slug });
  if (blog) {
    res.send(blog);
  } else {
    res.status(404).send({ message: "blog Not Found" });
  }
});

router.get("/:id", async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  if (blog) {
    res.send(blog);
  } else {
    res.status(404).send({ message: "Product Not Found" });
  }
});

router.post("/addBlog", async (req, res) => {
  const blog = new Blog({
    slug: req.body.slug,
    title: req.body.title,
    writer: req.body.writer,
    image: req.body.image,
    category: req.body.category,
    description: req.body.description,
    content: req.body.content,
    details: req.body.details,
  });
  await blog.save();
  res.send(blog);
});

router.put("/:id", async (req, res) => {
  const blog = await Blog.findByIdAndUpdate(
    req.params.id,
    {
      slug: req.body.slug,
      title: req.body.title,
      writer: req.body.writer,
      image: req.body.image,
      category: req.body.category,
      description: req.body.description,
      content: req.body.content,
      details: req.body.details,
    },
    { new: true }
  );
  if (!blog) {
    return res.status(404).send(`we don't have her this blog`);
  }
  res.send(blog);
});

router.delete("/:id", async (req, res) => {
  const blog = await Blog.findByIdAndRemove(req.params.id);

  if (!blog) {
    return res.status(404).send(`we don't have her this Product `);
  }
  res.send(blog);
});

export default router;
