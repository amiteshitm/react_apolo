const express = require('express');
const app = express();
data={
    name:'Amitesh',
    status:'Software Engineer'
}


module.exports = (app)=>{
    app.get('/',(req,res)=>{
        res.render('home',{data:data})
    })
    
    app.get('/about',(req,res)=>{
        res.send('hello about')
    })

    app.get('/contact',(req,res)=>{
        res.send('hello contact')
    }) 
    app.get('/profile/:id',(req,res)=>{
        res.send(`your requested user no ${req.params.id}`)
    }) 
}


