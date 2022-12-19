const express = require('express');
const router = express.Router();
const itemsCtrl = require('../../controllers/api/items');

//GET api/items/search
router.get('/search', itemsCtrl.getItemsAPI);
router.get('/detail', itemsCtrl.getItemDetail);



module.exports = router;