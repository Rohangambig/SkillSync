const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRouter = require('./router/user')
const session = require('express-session');


dotenv.config();

const app =  express()
app.use(cors({
    origin: process.env.CLIENT_URL, 
  credentials: true   
}))
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended :  true}));

app.use(session({
  secret:process.env.SECRET,
  resave:false,
  saveUninitialized:false,
  cookie:{
    httpOnly:true,
    maxAge:24* 60 * 60 * 1000
  }
}))

const PORT = process.env.PORT || 5002



mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("Database is connected successfully");
})
.catch((err) => {
  console.error("Error in database connection:", err.message);
});

app.use('/user',userRouter);

app.listen(PORT,() => {
    console.log("Server is listening the port",PORT)
})