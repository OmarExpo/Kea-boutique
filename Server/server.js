require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Router = require('./route/routes');
const authRoutes = require('./route/auth');
const User = require('./model/User');
const passport = require('passport');
const session = require('express-session');
const mongoStore = require('connect-mongo')


// inititialize express app
const app = express();


// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/api/products' ,Router);
app.use('/api/auth', authRoutes);

// DB connection
mongoose.connect(
  process.env.DB_CONNECTION, 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected to MongoDB successfully");
});

// session
app.use
    (session({
    resave: true,
    saveUninitialized: true,
    secret: process.env.COOKIE_SESSION,
    store: mongoStore.create({ mongoUrl: process.env.DB_CONNECTION}),
  })
)
// create startegy
passport.use(User.createStrategy())
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

app.use(passport.initialize())
app.use(passport.session())




const port = process.env.PORT;
  app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
  });

/*   
// setting up DB connection and port
const port = process.env.PORT;
app.listen(port, () => {
  mongoose.connect(process.env.DB_CONNECTION || 'mongodb://localhost/your_preferred_db_name', { useNewUrlParser: true }).then((response) => {
      console.log(`Connected to MongoDB and server started on PORT ${port}`);
  }).catch((err) => {
      console.log(err);
  })
}); */