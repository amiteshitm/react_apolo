const express = require('express');
const app = express();
const port = 5000

//serving static files
app.use(express.static('public'))
// import routes
require('./routes')(app)
//HTML file rendering 
app.set('view engine', 'ejs')

app.listen(port,()=>{
    console.log('Server is running up',+port)
})

