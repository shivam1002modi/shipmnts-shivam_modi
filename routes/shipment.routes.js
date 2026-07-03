const express = require('express');
const router = express.Router();
const shipmentController = require('../controllers/shipment.controller');

router.route('/').post(shipmentController.createUser);

module.exports = router;    
