const Joi = require('joi');
const newPost = require('../../../model/Job');
const globel = require('../../../globelFunction');
const { method } = require('../../../customValidation');

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

async function updateJob(req, res) {
    // Lets Validate the Data before we a user
    const { error, value } = newJobValidation(req.body, true);
    if (error) return res.status(400).send(error.details[0].message);

    // Push Post Updated User
    value.$push = { updateUser: [req.user._id], updateDate: Date() }
    try {
        const post = await newPost.updateOne({ _id: req.params.postId }, value);
        if (!post) {
            res.status(400).send(globel.apiErrorMessage(
                {
                    message: "post not valid"
                }
            ));
        }
        else if (post.nModified == 0) {
            res.status(400).send(globel.apiErrorMessage(
                {
                    message: "post not updated"
                }
            ));
        } else {
            res.status(201).send(globel.apiSuccessMessage({
                data: value
            }));
        }
    } catch (err) {
        res.status(400).send(globel.apiErrorMessage({
            message: "something went wrong"
        }));
    }

}

module.exports = updateJob;