import Post from '../models/post.model.js';

export const getPosts = async (req, res) => {
    const posts = await Post.find();
    return res.status(200).json(posts);
};

export const getPost = async (req, res) => {
    const { slug } = req.params;
    const post = await Post.findOne({slug : slug});

    return res.status(200).json(post);
};

export const createPost = async (req, res) => {
    const { title, desc, img, content, category, user } = req.body;
    const newPost = new Post({
        title,
        desc,
        photo,
        category,
        user
    });

    try {
        const savedPost = await newPost.save();
        return res.status(201).json(savedPost);
    } catch (err) {
        return res.status(500).json(err);
    }
};