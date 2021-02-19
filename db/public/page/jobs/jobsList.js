const jobsList = require('../../../model/Job');
const globel = require('../../../globelFunction');

async function postList(req, res) {
    // Get Post Full Information
    // Data को Short करना हो तो .sort({date: 'desc/ascending'})
    const post = await jobsList.find({ visibility: "public", status: "publish" }).sort({ date: 'desc' }).limit(parseInt(req.query.limit));
    try {
        // res.send({ post: post });
        res.send(globel.apiSuccessMessage({
            data: post
        }));
    } catch (err) {
        // res.status(400).send(err);
        res.status(400).send(globel.apiErrorMassage({
            message: err
        }));
    }
}

module.exports = postList;