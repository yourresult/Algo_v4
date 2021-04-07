const findOrder = require('../../../model/Order');
const globel = require('../../../globelFunction');

async function postList(req, res) {
    // Checking if the user is already in the database
    var author = req.user;
    
    // Get Post Full Information    
    try {
        const post = await findOrder.find({author: author}).sort({ date: 'desc' });
        if (!post) return res.status(400).send(globel.apiErrorMessage(
            {
                message: "no record!"
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