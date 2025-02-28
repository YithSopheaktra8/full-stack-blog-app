import ImageKit from "imagekit";
import Post from "../models/post.model.js";
import User from "../models/user.model.js";

export const getPosts = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 2;

  const posts = await Post.find()
    .populate("user", "username")
    .limit(limit)
    .skip((page - 1) * limit);

  const totalPost = await Post.countDocuments();
  const hasMore = totalPost > page * limit;
  return res.status(200).json({
    posts,
    totalPost,
    hasMore,
  });
};

export const getPost = async (req, res) => {
  const { slug } = req.params;
  const post = await Post.findOne({ slug: slug }).populate("user", "username img");

  return res.status(200).json(post);
};

export const createPost = async (req, res) => {
  const clerkUserId = req.auth.userId;

  if (!clerkUserId) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  const user = await User.findOne({ clerkUserId: clerkUserId });

  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }


  let slug = req.body.title.replace(/ /g, "-").toLowerCase();
  // check if slug have question mark
  if (slug.includes("?")) {
    slug = slug.replace("?", "");
  }

  let existingPost = await Post.findOne({ slug });

  let counter = 2;

  while (existingPost) {
    slug = `${slug}-${counter}`;
    existingPost = await Post.findOne({ slug });
    counter++;
  }

  const newPost = new Post({ user: user._id, slug, ...req.body });

  try {
    const savedPost = await newPost.save();
    return res.status(201).json(savedPost);
  } catch (err) {
    return res.status(500).json(err);
  }
};

export const deletePost = async (req, res) => {
  const clerkUserId = req.auth.userId;
  if (!clerkUserId) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  const user = await User.findOne({ clerkUserId: clerkUserId });
  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  const post = await Post.findOneAndDelete({
    _id: req.params.id,
    user: user._id,
  });

  if (!post) {
    res.status(403).json({
      message: "You are not authorized to delete this post",
    });
  }

  res.status(200).json({
    message: "Post deleted successfully",
  });
};

const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
});
export const uploadAuth = async (req, res) => {
  var result = imagekit.getAuthenticationParameters();
  res.send(result);
};
