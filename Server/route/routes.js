const express = require('express');
const Product = require('../model/models');
const router = express.Router();


// CRUD OPERATIONS - Started as stubs for the API 6 built slowly up 
// Add a product in the database
router.post('/', async(req,res) => {
  const product = new Product(req.body);
  // save product to the db
  await product.save();
  return res.json(product);
});

// Retrieve all products from the MongoDB Atlas database
router.get('/', async(req,res) => {
 
  const products = await Product.find({}, {_id:0, __v:0})

  return res.status(200).json({products: products})
});

// delete a product by id
router.delete('/', async(req,res) => {
  // fínd product by id and delete
  await Product.findByIdAndDelete(req.body._id);

  return res.json({
    message: 'Product deleted successfully',
    success: true,
  });
});

// update product by id
router.put('/:id', async(req,res) => {
  // find product by id and update contents
  await Product.findOneAndUpdate({_id:req.params.id}, req.body, {new:true}, (err, product)=>{
    if(err){
      res.status(500).send(err);
    }
    res.status(200).json({message: 'Product deleted successfully',
    success: true});
  }).clone();
    
  });


  module.exports = router;