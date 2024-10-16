/** @format */

import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import connectDB from "./config/db.js";
import { servicesRoutes } from "./routes/services.routes.js";

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.json());

app.use("/api/services",servicesRoutes)

app.get("/",(req, res)=>{
 res.json({succes:true , data : "nothing"})
})

app.listen(PORT, () => {
  console.log(`app is running on http://localhost:${PORT}`);
  connectDB()
});
