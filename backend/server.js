import express from "express";
import cors from "cors";
import projectRoute from "./routes/projectRoute.js";
import contactRoute from "./routes/contactRoute.js";
// import dotenv from "dotenv";
// dotenv.config();
import "dotenv/config";
import { connectToDB } from "./lib/Db.js";
import path from "path";

const PORT = process.env.PORT || 5001;
const __dirname = path.resolve();
const app = express();
app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));


app.use("/api/project", projectRoute)
app.use("/api/contact", contactRoute)

if(process.env.NODE_ENV === "production") {
  //server our react app
  app.use(express.static(path.join(__dirname, "../frontend/dist")));
  // __dirname is the root directory of our project.

  app.get(/.*/, (req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontend", "dist", "index.html"));
  })
  
}


app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
connectToDB();
})