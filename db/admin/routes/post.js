const router = require('express').Router();
const Page = require('../page/index');
const verify = require('./verifyToken');

router.get('/post', verify, (req, res) => {
    Page.postList( req, res );
});
router.post('/post/new-post', verify, (req, res) => {
    Page.newPost( req, res );
});
router.get('/post/update/:postId', verify, (req, res) => {
    Page.updatePost( req, res );
});
router.get('/post/:postSlug', verify, (req, res) => {
    Page.getPost( req, res );
});


module.exports = router;