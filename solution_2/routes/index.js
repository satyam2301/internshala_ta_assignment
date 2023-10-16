const express = require('express');
const { mainController, queryController } = require('../controller');
const router = express.Router();

router.get('/student', queryController);
router.get('/greeting/:value', mainController);

module.exports = router;
