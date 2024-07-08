import mongoose from "mongoose";




const imgSchema = new mongoose.Schema(
  {
    imgs: { type: String, required: true, },
  }, 
  {
    timestamps: true,
  }
); 

const Img = mongoose.model("Img", imgSchema);
export default Img;
