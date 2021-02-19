const router = require('express').Router();
const Page = require('../page/index');

router.post('/register', (req, res) => {
    Page.register( req, res );
});

//Login
router.post('/login', (req,res) => {
    Page.login(req, res);
});

module.exports = router;