
const express = require("express");
const faker = require("faker");

const app = express();
const port = 3000;

app.get("/", (req, res) =>{
  res.send("Hola mi server en Express");
});

app.get("/home", (req, res) =>{
  res.send("Home");
});


app.get("/categories/:categoryId/products/:productId", (req, res) =>{
  const {categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId
  });
});

//Los endpoints especificos deben declararsen antes de los endpoints dinamicos.

//endpoints especificos
app.get("/products/filter", (req, res) =>{
  res.send("soy un filtro")
});

//endpoint dinamico
app.get("/products", (req, res) =>{
  const products = [];
  const {size} = req.query;
  const limit = size || 10;
  for (let index = 0; index < limit; index++){
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(),10),
      image: faker.image.imageUrl(),
    });
  };
  res.json(products);
});

app.get("/products/:id", (req, res) =>{
  const {id} = req.params;
  res.json({
      id,
      name: "Product1",
      price: 1000,
  });
})

app.get("/categories", (req, res) =>{
  res.json([
    {
      name: "Tech",
    },
    {
      name: "Groceries",
    },
    {
      name: "clothes",
    },
  ]);
});

app.get("/users", (req, res) => {
  const {limit, offset} = req.query;
  if (limit && offset){
    res.json({
      limit,
      offset
    })
  }else{
    res.send("no hay parametros");
  }
})

app.listen(port,()=>{
  console.log(`Listening at http://localhost:${port}`)
})




