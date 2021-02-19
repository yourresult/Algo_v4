const router = require('express').Router();
const Page = require('../page/index');


router.get('/', (req, res) => {
    Page.jobsList( req, res );
});
router.get('/jobs_notification', (req, res) => {
    Page.jobsList( req, res );
});
router.get('/:postSlug', (req, res) => {
    Page.getJob( req, res );
});


module.exports = router;