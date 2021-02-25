const express = require('express');
const router = express.Router();
const GroupController = require('../controllers/groupController');

router.get('/', GroupController.getGroup);

module.exports = router
