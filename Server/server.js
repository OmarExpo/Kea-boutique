require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// inititialize express app
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Schema instance from mongoose schema
const Schema = mongoose.Schema;
// create a new schema
const productSchema =new Schema({
  name: {
    type:String,
    required:true
  },
    date:{
      type:Date,
      default:Date.now
    },
    image:{
      type: String,
      required:true
    },
    price:{
      type: Number,
      required:true
    },
    quantity:{
      type: Number,
      required:true
    }
});

// Out of mongoose model, creates 'products' collection in the db
const Product = mongoose.model('products', productSchema);

// CRUD OPERATIONS - Started as stubs for the API 6 built slowly up 
// Add a product in the database
app.post('/api/products', async(req,res) => {
  const product = new Product(req.body);
  // save product to the db
  await product.save();
  return res.json(product);
});

// Retrieve all products from the MongoDB Atlas database
app.get('/api/products', async(req,res) => {
 
  const products = await Product.find({}, {_id:0, __v:0})

  return res.status(200).json({products: products})
});

// delete a product by id
app.delete('/api/products', async(req,res) => {
  // fínd product by id and delete
  await Product.findByIdAndDelete(req.body._id);

  return res.json({
    message: 'Product deleted successfully',
    success: true,
  });
});

// update product by id
app.put('/api/products/:id', async(req,res) => {
  // find product by id and update contents
  await Product.findOneAndUpdate({_id:req.params.id}, req.body, {new:true}, (err, product)=>{
    if(err){
      res.status(500).send(err);
    }
    res.status(200).json({message: 'Product deleted successfully',
    success: true});
  }).clone();
    
  });



// setting up DB connection and port
const port = process.env.PORT;
app.listen(port, () => {
  mongoose.connect(process.env.DB_CONNECTION || 'mongodb://localhost/your_preferred_db_name', { useNewUrlParser: true }).then((response) => {
      console.log(`Connected to MongoDB and server started on PORT ${port}`);
  }).catch((err) => {
      console.log(err);
  })
});