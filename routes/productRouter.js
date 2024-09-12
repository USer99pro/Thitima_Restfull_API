var express = require('express');
var router = express.Router();
const productController = require('../controller/productController');


// http;/127.0.0.1:3000/productController/
router.get ('/product' , productController.allproduct);
router.get('/product/:id'  , productController.userbyid);
router.get('/product/:name'  , productController.userbyname);
router.post('/product', productController.insertproduct);
router.put( '/product/:id', productController.Updateproduct);
router.delete( '/product/:id' , productController.deleteproduct);

module.exports = router;
