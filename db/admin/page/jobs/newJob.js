const Joi = require('joi');
const { method } = require('../../../customValidation');
const Post = require('../../../model/Job');
const {URLFriendly} = require('../../../globelFunction');

const newJobValidation = (data, update = false) => {
    data.isUpdate = update;
    const schema = Joi.object({
        isUpdate: Joi.valid(true, false).required(),
        visibility: Joi.string().valid('public', 'private').when('isUpdate', { is: Joi.valid(true), then: Joi.allow(), otherwise: Joi.required() }),
        status: Joi.string().valid('publish', 'draft', 'trash', 'bin').when('isUpdate', { is: Joi.valid(true), then: Joi.allow(), otherwise: Joi.required() }),
        permalink: Joi.string().custom(method),
        logo: Joi.string().min(6).max(1024).when('isUpdate', { is: Joi.valid(true), then: Joi.allow(), otherwise: Joi.required() }),
        type: Joi.string().min(6).max(1024).when('isUpdate', { is: Joi.valid(true), then: Joi.allow(), otherwise: Joi.required() }),
        lastDate: Joi.string().min(6).max(1024).when('isUpdate', { is: Joi.valid(true), then: Joi.allow(), otherwise: Joi.required() }),
        featureImage: Joi.string().min(6).max(1024).when('isUpdate', { is: Joi.valid(true), then: Joi.allow(), otherwise: Joi.required() }),
        title: Joi.string().min(6).max(150).when('isUpdate', { is: Joi.valid(true), then: Joi.allow(), otherwise: Joi.required() }),
        postContent: Joi.string().min(6).max(5000).when('isUpdate', { is: Joi.valid(true), then: Joi.allow(), otherwise: Joi.required() }),
        publishDate: Joi.string().min(6).max(20).when('isUpdate', { is: Joi.valid(true), then: Joi.allow(), otherwise: Joi.required() })
    });
    return schema.validate(data);
}


async function newPost( req, res ) {
    if (req.body.permalink == null) {
        req.body.permalink = URLFriendly(req.body.title);
    }

    // Lets Validate the Data before we a user
    const { error } = newJobValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // Checking if the user is already in the database
    const permalinkExist = await Post.findOne({ permalink: req.body.permalink });
    if (permalinkExist) return res.status(400).send("Permalink already exist!");

    // Create a new user
    const post = new Post({
        author: req.user,
        visibility: req.body.visibility,
        status: req.body.status,
        type: req.body.type,
        logo: req.body.logo,
        lastDate: req.body.lastDate,
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