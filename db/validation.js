// Validation
const Joi = require('joi');
const { method } = require('./customValidation');

// Register Validation
const registerValidation = data => {
    const schema = Joi.object({
        name: Joi.string().min(6).required(),
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    });
    return schema.validate(data);
}
// Register Validation
const loginValidation = data => {
    const schema = Joi.object({
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    });
    return schema.validate(data);
}

const newPostValidation = (data, update = false) => {
    data.isUpdate = update;
    
    const schema = Joi.object({
        isUpdate: Joi.valid(true, false).required(),
        visibility: Joi.string().valid('public', 'private').when('isUpdate', { is: Joi.valid(true), then: Joi.allow(), otherwise: Joi.required() }),
        status: Joi.string().valid('publish', 'draft', 'trash', 'bin').when('isUpdate', { is: Joi.valid(true), then: Joi.allow(), otherwise: Joi.required() }),
        permalink: Joi.string().custom(method),
        featureImage: Joi.string().min(6).max(1024).when('isUpdate', { is: Joi.valid(true), then: Joi.allow(), otherwise: Joi.required() }),
        title: Joi.string().min(6).max(150).when('isUpdate', { is: Joi.valid(true), then: Joi.allow(), otherwise: Joi.required() }),
        postContent: Joi.string().min(6).max(5000).when('isUpdate', { is: Joi.valid(true), then: Joi.allow(), otherwise: Joi.required() }),
        publishDate: Joi.string().min(6).max(20).when('isUpdate', { is: Joi.valid(true), then: Joi.allow(), otherwise: Joi.required() })
    });
    return schema.validate(data);
}

const postListValidation = data => {
    const schema = Joi.object({
        permalink: Joi.string().custom(method)
    });
    return schema.validate(data);
}

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
module.exports.newPostValidation = newPostValidation;
module.exports.postListValidation = postListValidation;