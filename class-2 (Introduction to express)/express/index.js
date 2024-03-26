const express = require('express')
const app  = express()



app.get('/' , (req , res)=>{
    return res.send('Hello from the server')
})


app.get('/about' , (req , res)=>{
    return res.send('this is the about Page')
})

app.get('/product' , (req , res)=>{
    console.log(req)
    return res.send('this is the product Page' + req.query.shoes)
    
})



app.listen(8003 , ()=>{
  console.log('Server Started at 8003')
})





