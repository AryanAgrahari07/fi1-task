import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import productRoutes from "./routes/productRoutes.js";

dotenv.config();
const app = express();

app.use(cors({
  origin: process.env.FRONTEND_URL,
  methods: ["GET", "POST"],
  credentials: true,
}));

app.use(express.json());
app.use("/api/products", productRoutes);

mongoose.connect(process.env.MONGO_URI)
.then(()=> {
    console.log("Database connected");
}).catch((e)=> {
    console.log(e);
});

app.get("/", (req, res) => res.send("API running..."));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
