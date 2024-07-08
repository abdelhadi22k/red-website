import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    projectImg: { type: String, required: true, },
    title: { type: String, required: true, },
    category: { type: String, required: true, },
    projectLink: { type: String, required: true, },
    description: { type: String, required: true, },
    tags: [{ type: String }],
  },
  {
    timestamps: true,
  }
); 

const Project = mongoose.model("Project", projectSchema);
export default Project; 
