var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');
var ctrlPrice = require('../controllers/price');
var ctrlOther = require('../controllers/other');

/* GET home page. */
router.get('/', ctrlMain.index);
router.get('/price', ctrlPrice.index);
router.get('/contacts', ctrlOther.contacts);
router.get('/about', ctrlOther.about);

module.exports = router;
