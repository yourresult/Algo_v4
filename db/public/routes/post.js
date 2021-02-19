const router = require('express').Router();
const Page = require('../page/index');


router.get('/', (req, res) => {
    Page.postList( req, res );
});
router.get('/:postSlug', (req, res) => {
    Page.getPost( req, res );
});


module.exports = router;