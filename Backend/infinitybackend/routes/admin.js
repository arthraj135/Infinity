var express = require('express');
var router = express.Router();
var Product = require('../models/product')

/* GET home page. */
router.get('/login', function(req, res, next) {
  res.render('index', { title: 'Calling from admin' });
});

router.post('/addproduct', async(req, res) => {
    try{
        let product = await new Product(req.body).save();
        res.json({
            message: 'Product added successfully',
            data: product, success: true
        })
    }
    catch(err){
        res.json({message: arr.message, success: false })
    }
});

router.get('/productlist', async(req, res) => {
    try{
        const listproduct = await Product.find().exec();
        res.json({
            message: 'DetailProduct Listing',
            data: listproduct, success: true
        })
    }
    catch(err){
        res.json({message: arr.message, success: false });
    }
});

router.post('/updateproduct/:id', async (req, res) => {
    try {
      const productId = req.params.id;
      const updateData = req.body; // Assuming you send the updated data in the request body
   
      // Find the product by ID and update it with the new data
      const updatedProduct = await Product.findByIdAndUpdate(productId, updateData, {
        new: true, // To return the updated product instead of the old one
      }).exec();
   
      if (!updatedProduct) {
        // If the product is not found, return an error response
        return res.status(404).json({ message: 'Product not found', success: false });
      }
   
      res.json({ message: 'Product successfully updated', product: updatedProduct, success: true });
    } catch (err) {
      // Handle any errors during the update process
      res.status(500).json({ message: err.message, success: false });
    }
  });
   
  router.get('/products/:id', async (req, res) => {
    try {
      const productId = req.params.id;
   
      // Find the product in the database based on the provided ID
      const product = await Product.findById(productId);
   
      if (!product) {
        // If the product with the given ID is not found, return an error response
        return res.status(404).json({ message: 'Product not found', success: false });
      }
   
      // If the product is found, return the product details
      res.json({ message: 'Product details fetched successfully', data: product, success: true });
    } catch (err) {
      // Handle any errors that occur during the process
      res.status(500).json({ message: err.message, success: false });
    }
  });
   
   
  router.delete('/deleteproduct/:id', async (req, res) => {
    try {
      const productId = req.params.id;
   
      // Find the product by ID and remove it from the database
      const deletedProduct = await Product.findByIdAndRemove(productId).exec();
   
      if (!deletedProduct) {
        // If the product is not found, return an error response
        return res.status(404).json({ message: 'Product not found', success: false });
      }
   
      res.json({ message: 'Product successfully deleted', success: true });
    } catch (err) {
      // Handle any errors during the deletion process
      res.status(500).json({ message: err.message, success: false });
    }
  });

module.exports = router; 
