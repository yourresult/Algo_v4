const newPost = require('../../../model/Post');
const globel = require('../../../globelFunction');
const {newPostValidation} = require('../../../validation');

async function postList(req, res) {
    // Lets Validate the Data before we a user
    const { error, value } = newPostValidation(req.body, true);
    if (error) return res.status(400).send(error.details[0].message);

    // Push Post Updated User
    value.$push = {updateUser: [req.user._id], updateDate: Date()}
    const post = await newPost.updateOne({ _id: req.params.postId }, value);
    try {
        if (!post) return res.status(400).send(globel.apiErrorMessage(
            {
                message: "post not valid"
            }
        ));
        res.send(globel.apiSuccessMessage({
            data: value
        }));
    } catch (err) {
        res.status(400).send(globel.apiErrorMassage({
            message: err
        }));
    }

}

module.exports = postList;