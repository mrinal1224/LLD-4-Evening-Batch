const express = require("express");

const app = express();

const products = require("./MOCK_DATA.json");

const PORT = 8006;

// Routing

app.get("/", (req, res) => {
  res.send("Welcome to the our Shop");
});


// hybrid Api development
app.get('/api/products' , (req , res)=>{
    res.json(products)
})

app.get("/products", (req, res) => {
  const html = `<ul> ${products.map(
    (product) => `<li>${product.product_name} </li>`
  )}  </ul>
    `;

    res.send(html)
});


// Route parameters

app.get('/api/products/:id' , (req , res)=>{
     const id = Number(req.params.id) // 7

     const product = products.find((product)=> product.id === id)
     return res.json(product)
})



// Post Put Delete

// Post Method




















app.listen(PORT, () => {
  console.log(`The server is running in port ${PORT}`);
});
