import express from "express";
import mongoose from "mongoose";
import cors from "cors";
// using .env files is much better in my opinion.
// When working with databases it's just better and makes collaboration easier because it allows easier modification for db configurations and whatnot.
//
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
import posts from "./routes/posts.js";
app.use("/posts", posts);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
