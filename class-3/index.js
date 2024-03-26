const express = require("express");
const fs = require("fs");

const app = express();

const products = require("./MOCK_DATA.json");
const exp = require("constants");

const PORT = 8006;

app.use(express.urlencoded());
app.use(express.json())

// Routing

app.get("/", (req, res) => {
  res.send("Welcome to the our Shop");
});

// hybrid Api development
app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/products", (req, res) => {
  const html = `<ul> ${products.map(
    (product) => `<li>${product.product_name} </li>`
  )}  </ul>
    `;

  res.send(html);
});

// Route parameters

app.get("/api/products/:id", (req, res) => {
  const id = Number(req.params.id); // 7

  const product = products.find((product) => product.id === id);
  return res.json(product);
});

// Post Put Delete

// Post Method

app.post("/api/products", (req, res) => {
  const newData = req.body;
  products.push({ id: products.length + 1, ...newData });
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(products), (err, data) => {
    return res.send({ status: "succesfully created", id: products.length });
  });
});

app.listen(PORT, () => {
  console.log(`The server is running in port ${PORT}`);
});


// put and delete



