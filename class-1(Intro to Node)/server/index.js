const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req, res) => {
  // res.end("Hola from the server")
  console.log(req.url);

  const parsedUrl = url.parse(req.url, true);
  console.log(parsedUrl);

  const log = `${req.url} Request recieved\n`;
  fs.appendFile("log.txt", log, (err, data) => {
    switch (req.url) {
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
        res.end("This is my product page");
        break;
      default:
        res.end("Not Found");
    }
  });
});

myServer.listen(8002, () => {
  console.log("Server started on port 8002");
});
