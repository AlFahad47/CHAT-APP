import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"

import connectToMongoDB from './db/connectToMongoDB.js';

dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();


// app.get("/",(req,res)=>{
//     res.send("hello world!!!");
// });

app.use(express.json());
app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);

app.listen(PORT ,() => {
    connectToMongoDB();
    console.log(`server Running on port ${PORT}`);
});