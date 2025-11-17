import express from "express";
const router = express.Router();
import Post from "../models/Post.js";

router.get("/", async (req, res) => {
  try {
    // Post.find() gets all the documents from the 'posts' collection.
    // .sort({ createdAt: -1 }) sorts them to show the newest ones first.
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  // Create a new post object in memory from the data sent by the client.
  const post = new Post({
    title: req.body.title,
    author: req.body.author,
    content: req.body.content,
  });
  try {
    // with .save() we actually the new post to the database.
    const newPost = await post.save();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    // { new: true } tells Mongoose to send back the *updated* post, not the old version.
    const updatedPost = await Post.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title,
        author: req.body.author,
        content: req.body.content,
      },
      { new: true }
    );
    res.json(updatedPost);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    // Find the post by its ID (from the URL) and delete it.
    await Post.findByIdAndDelete(req.params.id);
    res.json({ message: "Post deleted successfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;
