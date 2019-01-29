var express = require('express');
var router = express.Router();

const createListingController = require('../controllers/createListingController');

router.get('/listing-info', createListingController.listingInfo);

module.exports = router;
