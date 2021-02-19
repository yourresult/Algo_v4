const router = require('express').Router();
const Page = require('../page/index');
const verify = require('./verifyToken');

router.get('/job', verify, (req, res) => {
    Page.jobList( req, res );
});
router.post('/job/new-post', verify, (req, res) => {
    Page.newJob( req, res );
});
router.post('/job/update/:postId', verify, (req, res) => {
    Page.updateJob( req, res );
});
router.get('/job/:postSlug', verify, (req, res) => {
    Page.getJob( req, res );
});


module.exports = router;