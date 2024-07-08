// https://github.com/basir/mern-amazona/commits/master
// Mobile 7XXXX-3948

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors"; 

import user from "./routers/user.js";
import project from "./routers/project.js";
import blog from "./routers/blog.js";
import opinion from "./routers/opinion.js";
import message from "./routers/message.js"; 
import seedRouter from "./routers/seedRouter.js"; 
import imgs from "./routers/img.js"; 

const app = express(); 
app.use(express.urlencoded({ extended: true }));
dotenv.config();
const port = process.env.PORT || 4444;
app.use(cors());
app.use(express.json());  
       
app.use("/api/users", user);       
app.use("/api/project", project); 
app.use("/api/blog", blog); 
app.use("/api/opinion", opinion);
app.use("/api/message", message);  
app.use("/api/imgs", imgs);     
app.use("/api/seedRouter", seedRouter);      

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message }); 
});
app.get("/", (req, res) => {
  res.send("hello world");  
});
    
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    app.listen(port, () => {
      console.log(`The server is running at the port http://localhost:${port}`);
    });
    console.log("Database it's Connected");
  })
  .catch((error) => {
    console.log(`Filed` + error);
  });  
