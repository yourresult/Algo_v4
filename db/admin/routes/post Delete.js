const router = require('express').Router();
const verify = require('./verifyToken');
// const Page = require('../page/index');


router.get('/', verify, (req, res) => {
    res.send(req.user);
})

// Post Lists
// router.get('/posts', verify, (req, res) => {
//     res.send(req.user);
// })

// Create New Post
// router.get('/newPost', verify, (req, res) => {
//     res.send(req.user);
// })

// Create Update Post
// router.get('/update/:postName', verify, (req, res) => {
//     var postName = req.params.postName;
//     res.send(postName);
    // res.send(req.user);
// })

module.exports = router;