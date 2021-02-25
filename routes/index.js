const express = require('express');
const router = express.Router();
const groupRouter = require('./groupRouter');

router.use('/group', groupRouter);

module.exports = router;