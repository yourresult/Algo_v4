const getAllJobs = require('../../../model/Job');
const globel = require('../../../globelFunction');

async function jobsList(req, res) {
    // Get Post Full Information
    // Data को Short करना हो तो .sort({date: 'desc/ascending'})
    const post = await getAllJobs.find().sort({ date: 'desc' }).limit(parseInt(req.query.limit));
    try {
        res.send(globel.apiSuccessMessage({
            data: post
        }));
    } catch (err) {
        res.status(400).send(err);
    }

}

module.exports = jobsList;