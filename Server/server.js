require('dotenv').config();
const express = require('express');
const mongo = require('mongodb').MongoClient;
const cors = require('cors');

// inititialize express app
const app = express();

// middleware
app.use(express.json());
app.use(cors());

// DB connection setup
const url = process.env.DB_URL;

let db, products, prices;
mongo.connect(
  url,
  {
    useNewUrlParser:true
  },
  (err, client)=>{
    if(err){
      console.log(err)
      return
    }
    db = client.db('keaboutique')
    products = db.collection('products')
    prices = db.collection('prices')
  }
);

// Started as stubs for the API built slowly up
app.post('/product', (req,res) => {
  const title = req.body.title;
  products.insertOne(
    {title: title}, (err, result) => {

      if(err){
        console.log(err)
        res.status(500).json({err : err})
      }

      console.log(result)
      res.status(201).json({ok : true});
    })
})

app.get('/products', (req,res) => {
  products.find().toArray((err, items) => {
    if(err){
      console.log(err)
      res.status(500).json({err : err})
      return
    }
    res.status(200).json({products : items})
  });
})
// Endpoint to add new price look like this:
// POST /price { product, date, qty, category}

app.post('/price', (req,res) => {
  prices.insertOne({
    product : req.body.product,
    date: req.body.date,
    qty : req.body.qty,
    category : req.body.category,
  },
  (err, result) => {
    if(err) {
      console.error(err)
      res.status(500).json({err:err})
      return
    }
    res.status(201).json({ ok: true})
  }
   
  )
})

app.get('/prices', (req,res) => {
  prices.find().toArray((err, items) => {
    if(err){
      console.log(err)
      res.status(500).json({err : err})
      return
    }
    res.status(200).json({prices : items})
  });
})




const port = process.env.PORT;
app.listen(port, () => console.log(`Server ready on port ${port}`));