const Post = require('../../../model/Post');
const {newPostValidation} = require('../../../validation');
const {URLFriendly} = require('../../../globelFunction');


async function newPost( req, res ) {
    if (req.body.permalink == null) {
        req.body.permalink = URLFriendly(req.body.title);
    }

    // Lets Validate the Data before we a user
    const { error } = newPostValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // Checking if the user is already in the database
    const permalinkExist = await Post.findOne({ permalink: req.body.permalink });
    if (permalinkExist) return res.status(400).send("Permalink already exist!");

    // Hash Passwords
    // const salt = await bcrypt.genSalt(10);
    // const hashPassword = await bcrypt.hash(req.body.password, salt);


    // Create a new user
    const post = new Post({
        author: req.user,
        visibility: req.body.visibility,
        status: req.body.status,
        permalink: req.body.permalink,
        featureImage: req.body.featureImage,
        title: req.body.title,
        postContent: req.body.postContent,
        publishDate: req.body.publishDate
    });
    try {
        const savedPost = await post.save();
        res.send({ post: post._id });
    } catch (err) {
        res.status(400).send(err);
    }
}

module.exports = newPost;