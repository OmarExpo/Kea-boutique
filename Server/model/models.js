const mongoose = require('mongoose');


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

module.exports = Product;