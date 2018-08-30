const express = require('express');
const router = express.Router();

const UpdateService = require('../services/updateService');
const updateService = new UpdateService();


/* GET home page. */
router.get('/', function(req, res, next) {
    res.json(updateService.updates);
});

module.exports = router;
