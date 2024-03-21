const http = require('http')


const myServer = http.createServer((req , res)=>{
    res.end("Hello From the Server")
})


myServer.listen(8002 , ()=>{
    console.log('Server started on port 8002')
})






