const Joi = require('joi');
const Post = require('../../../model/Order');

const newJobValidation = (data, update = false) => {
    data.isUpdate = update;
    const schema = Joi.object({
        isUpdate: Joi.valid(true, false).required(),
        visibility: Joi.string().valid('public', 'private').when('isUpdate', { is: Joi.valid(true), then: Joi.allow(), otherwise: Joi.required() }),
        status: Joi.string().valid('OPEN', 'CLOSE', 'COMPLITE', 'REJECTED').when('isUpdate', { is: Joi.valid(true), then: Joi.allow(), otherwise: Joi.required() }),
        variety: Joi.string().min(2).max(50).when('isUpdate', { is: Joi.valid(true), then: Joi.allow(), otherwise: Joi.required() }),
        exchange: Joi.string().min(2).max(50).when('isUpdate', { is: Joi.valid(true), then: Joi.allow(), otherwise: Joi.required() }),
        tradingsymbol: Joi.string().min(2).max(100).when('isUpdate', { is: Joi.valid(true), then: Joi.allow(), otherwise: Joi.required() }),
        transaction_type: Joi.string().min(2).max(50).when('isUpdate', { is: Joi.valid(true), then: Joi.allow(), otherwise: Joi.required() }),
        order_type: Joi.string().min(1).max(50).when('isUpdate', { is: Joi.valid(true), then: Joi.allow(), otherwise: Joi.required() }),
        quantity: Joi.number().integer().min(1).max(5000).when('isUpdate', { is: Joi.valid(true), then: Joi.allow(), otherwise: Joi.required() }),
        price: Joi.number().min(1).max(5000).when('isUpdate', { is: Joi.valid(true), then: Joi.allow(), otherwise: Joi.required() }),
        product: Joi.string().min(2).max(5000).when('isUpdate', { is: Joi.valid(true), then: Joi.allow(), otherwise: Joi.required() }),
        validity: Joi.string().min(2).max(5000).when('isUpdate', { is: Joi.valid(true), then: Joi.allow(), otherwise: Joi.required() }),
        disclosed_quantity: Joi.number().when('isUpdate', { is: Joi.valid(true), then: Joi.allow(), otherwise: Joi.required() }),
        trigger_price: Joi.number().when('isUpdate', { is: Joi.valid(true), then: Joi.allow(), otherwise: Joi.required() }),
        squareoff: Joi.number().when('isUpdate', { is: Joi.valid(true), then: Joi.allow(), otherwise: Joi.required() }),
        stoploss: Joi.number().when('isUpdate', { is: Joi.valid(true), then: Joi.allow(), otherwise: Joi.required() }),
        trailing_stoploss: Joi.number().when('isUpdate', { is: Joi.valid(true), then: Joi.allow(), otherwise: Joi.required() }),
        user_id: Joi.string().min(2).max(5000).when('isUpdate', { is: Joi.valid(true), then: Joi.allow(), otherwise: Joi.required() })
    });
    return schema.validate(data);
}


async function newPost( req, res ) {
    // if (req.body.permalink == null) {
    //     req.body.permalink = URLFriendly(req.body.title);
    // }

    // Lets Validate the Data before we a user
    const { error } = newJobValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // Create a new user
    const post = new Post({
        author: req.user,
        visibility: req.body.visibility,
        status: req.body.status,
        variety: req.body.variety,
        exchange: req.body.exchange,
        tradingsymbol: req.body.tradingsymbol,
        transaction_type: req.body.transaction_type,
        order_type: req.body.order_type,
        quantity: req.body.quantity,
        price: req.body.price,
        product: req.body.product,
        validity: req.body.validity,
        disclosed_quantity: req.body.disclosed_quantity,
        trigger_price: req.body.trigger_price,
        squareoff: req.body.squareoff,
        stoploss: req.body.stoploss,
        trailing_stoploss: req.body.trailing_stoploss,
        user_id: req.body.user_id
    });
    try {
        const savedPost = await post.save();
        res.send({ post: post._id });
    } catch (err) {
        res.status(400).send(err);
    }
}

module.exports = newPost;