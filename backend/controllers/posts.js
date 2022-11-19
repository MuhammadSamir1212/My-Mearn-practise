import PostSchema from "../models/PostSchema.js";
import mongoose from "mongoose";

export const getPosts = async (req, res) => {
  try {
    const postSchema = await PostSchema.find();
    res.send(postSchema);
  } catch (err) {
    console.log(err);
  }
};

export const createPost = async (req, res) => {
  const body = req.body;
  const newPostSchema = new PostSchema(body);
  try {
    await newPostSchema.save();
    res.send("inserted datad");
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const body = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    console.log("No Posts with that id");
  }

  const updatePost = await PostSchema.findByIdAndUpdate(_id, body, {
    new: true,
  });

  res.json(updatePost);
};

export const deletePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.stats(404).send("No Posts with that id");
  }

  await PostSchema.findByIdAndRemove(id);

  res.json({ message: "post deleted successfully" });
};
