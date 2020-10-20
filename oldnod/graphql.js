const express = require('express');
const app = express()
const mongoose = require('mongoose')
const dbUrl='mongodb+srv://amiteshitm:amit476229@cluster0-n1oxf.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect(dbUrl,{useNewUrlParser: true})
  .then(()=>console.log('db connected'))
  .catch((err)=>console.log(err))

const PORT =   4000
app.get('/', function(req,res){
    res.send('hello word') 
})
app.listen(PORT, ()=>{
    console.log(`server is running up ${PORT}`)
});

