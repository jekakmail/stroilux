var express = require('express');
var router = express.Router();

var ctrlPrice = require('../controllers/price');

router.route('/price')
    .get(ctrlPrice.priceRead)
    .post(ctrlPrice.priceCreate)
    .delete(ctrlPrice.priceDelete);
router.get('/price/:priceid', ctrlPrice.priceReadOne);

module.exports = router;