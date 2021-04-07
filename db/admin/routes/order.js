const router = require('express').Router();
const Page = require('../page/index');
const verify = require('./verifyToken');

router.get('/order/place', verify, (req, res) => {
    Page.placeOrder( req, res );
});
router.post('/order', verify, (req, res) => {
    Page.viewUserOrders( req, res );
});
router.post('/order/detail/:orderId', verify, (req, res) => {
    Page.updateJob( req, res );
});
router.post('/order/delete/:orderId', verify, (req, res) => {
    Page.updateJob( req, res );
});


module.exports = router;