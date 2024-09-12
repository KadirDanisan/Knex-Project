const express = require('express');
const Category = require('../models/category');
const router = express.Router();


router.get('/categories/:id');
router.patch('/categories/:id');
router.delete('/categories');

module.exports = router;