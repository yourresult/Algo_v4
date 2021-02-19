const findPost = require('../../../model/Job');
const globel = require('../../../globelFunction');

async function postList(req, res) {
    // Checking if the user is already in the database
    // Get Post Full Information    
    try {
        const post = await findPost.findOne({ permalink: req.params.postSlug });
        if (!post) return res.status(400).send(globel.apiErrorMessage(
            {
                message: "slug is not valid"
            }
        ));
        res.send(globel.apiSuccessMessage({
            data: post
        }));
    } catch (err) {
        res.status(400).send(globel.apiErrorMassage({
            message: err
        }));
    }

}

module.exports = postList;