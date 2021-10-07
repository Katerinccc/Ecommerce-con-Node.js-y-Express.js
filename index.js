
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) =>{
  res.send("Hola mi server en Express");
});

app.get("/home", (req, res) =>{
  res.send("Home");
});


app.get("/categories", (req, res) =>{
  res.send("Categorias");
});

app.get("/products", (req, res) =>{
  res.json({
    name: "Product1",
    price: 1000
  });
});


app.listen(port,()=>{
  console.log(`Listening at http://localhost:${port}`)
})




