const http = require("http");
const fs = require("fs");
const url = require("url");

function serverHandler(){
  (req, res) => {
    // res.end("Hola from the server")
    console.log(req.url);
  
    const parsedUrl = url.parse(req.url, true);
    console.log(parsedUrl);
  
    const log = `${req.url} Request recieved\n`;
    fs.appendFile("log.txt", log, (err, data) => {
      switch (parsedUrl.pathname) {
        case "/":
          res.end("This is my HomePage");
          break;
        case "/about":
          res.end("This is my about page");
          break;
        case "/contact":
          res.end("This is my contact page");
          break;
        case "/products":
          const shoe = parsedUrl.query.shoes
          res.end("This is my product page " +"here are your shoes " + shoe);
          break;
        default:
          res.end("Not Found");
      }
    });
  }
}

const myServer = http.createServer(serverHandler);

myServer.listen(8002, () => {
  console.log("Server started on port 8002");
});
