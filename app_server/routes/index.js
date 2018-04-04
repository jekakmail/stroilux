var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');
var ctrlPrice = require('../controllers/price');
var ctrlOther = require('../controllers/other');

/* GET home page. */
router.get('/', ctrlMain.index);
router.route('/price')
    .get(ctrlPrice.index)
    .post(ctrlPrice.upload);
router.get('/contacts', ctrlOther.contacts);
router.get('/about', ctrlOther.about);

module.exports = router;
