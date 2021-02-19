const newPost = require('../../../model/Post');
const User = require('../../../model/User');

async function postList(req, res) {

    // Checking if the user is already in the database
    const authorExist = await User.findOne({ _id: req.user });
    if (!authorExist) return res.status(400).send("Author not Registerd");
    
    // Get Post Full Information
    // Data को Short करना हो तो .sort({date: 'desc/ascending'})
    const post = await newPost.find().sort({ date: 'desc' }).limit(parseInt(req.query.limit));
    try {
        res.send({ post: post });
    } catch (err) {
        res.status(400).send(err);
    }

}

module.exports = postList;