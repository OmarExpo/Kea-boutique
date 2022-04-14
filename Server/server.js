require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// inititialize express app
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(cors());

// Schema setup
const Schema = mongoose.Schema;
const productSchema =new Schema({
  title:{
    type:String,
    required:true
  }
});
const shoppingSchema =new Schema({
  product: {
    type:String,
    required:true
  },
    date:{
      type:Date,
      default:Date.now
    },
    amount:{
      type: Number,
      required:true
    },
    category:{
      type: String,
      required:true
    }
});

// make models out schemas
const Product = mongoose.model('products', productSchema);
const Shopping = mongoose.model('shoppings', shoppingSchema);



// Started as stubs for the API built slowly up
app.post('/product', async(req,res) => {
  const product = new Product(req.body);
  // save product to the db
  await product.save();
  return res.json(product);
});

app.get('/products', async(req,res) => {
 
  const products = await Product.find({}, {_id:0, __v:0})

  return res.status(200).json({products: products})
});


app.post('/shopping', async(req,res) => {
  
  const shopping = new Shopping(req.body)
  // save shopping to the db
  await shopping.save();
  return res.json(shopping)
});

app.get('/shoppings', async(req,res) => {
 
  const shoppings = await Shopping.find({}, {_id:0, __v:0})

  return res.status(200).json({shoppings : shoppings});
});




const port = process.env.PORT;
app.listen(port, () => {
  mongoose.connect(process.env.DB_CONNECTION || 'mongodb://localhost/your_preferred_db_name', { useNewUrlParser: true }).then((response) => {
      console.log(`Connected to MongoDB and server started on PORT ${port}`);
  }).catch((err) => {
      console.log(err);
  })
});