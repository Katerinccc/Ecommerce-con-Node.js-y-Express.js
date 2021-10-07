
const express = require("express");
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

app.get("/products", (req, res) =>{
  res.json([
    {
      name: "tablet",
      price: 1000,
    },
    {
      name: "laptop",
      price: 2500,
    },
    {
      name: "mouse",
      price: 70,
    },
  ]);
});

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

app.get("/users", (req, res) =>{
  res.json([
    {
      name: "Katerin",
      last_name: "Vega",
    },
    {
      name: "Miguel",
      last_name: "Velandia",
    },
    {
      name: "Katalina",
      last_name: "Gomez",
    },
  ]);
});

app.get("/products/:id", (req, res) =>{
  const {id} = req.params;
  res.json({
      id,
      name: "Product1",
      price: 1000,
  });
})


app.listen(port,()=>{
  console.log(`Listening at http://localhost:${port}`)
})




