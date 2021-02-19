const jobsList = require('../../../model/Job');

async function postList(req, res) {
    // Get Post Full Information
    // Data को Short करना हो तो .sort({date: 'desc/ascending'})
    const post = await jobsList.find({ visibility: "public", status: "publish" }).sort({ date: 'desc' }).limit(parseInt(req.query.limit));
    try {
        res.send({ post: post });
    } catch (err) {
        res.status(400).send(err);
    }
}

module.exports = postList;