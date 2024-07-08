import mongoose from "mongoose";

const blogSchema = new mongoose.Schema( 
  {
    slug: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    writer: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },   

    description: { 
      descriptionTitle: { type: String, required: true },
      descriptionDetails: { type: String, required: true },
    },
    content: [
      {
        contentTitle: { type: String, required: true },
        contentDetails: { type: String, required: true },
      },
    ],
    details: [
      {
        detailsTitle: { type: String, required: true },
        detailsContent: { type: String, required: true },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Blog = mongoose.model("Blog", blogSchema);
export default Blog;
