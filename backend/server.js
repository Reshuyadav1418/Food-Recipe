const express= require('express');
const app=express();

const dotenv= require('dotenv').config();
const connectDb=require('./config/connectionDb.js');

const PORT= process.env.PORT || 3000;
connectDb();

// const bodyParser= require('body-parser');
app.use(express.json());

//recipe router
const recipe= require('./Route/recipe.js');
app.use('/recipe', recipe);

  



app.listen(PORT,(err)=>{
    console.log(`listening on port  ${PORT} `);
});