const express = require("express");
const ProductsService = require("../services/productService");

const router = express.Router();
const service = new ProductsService();

router.get("/filter", (req, res) =>{
  res.send("soy un filtro")
});

router.get("/", (req, res) =>{
  const products = service.find();
  res.json(products);
});

router.get("/:id", (req, res) =>{
  const {id} = req.params;
  const product = service.findOne(id);
  res.json(product);
});

router.post("/", (req, res) =>{
  const body = req.body;
  const newProduct = service.create(body);
  res.status(201).json(newProduct);
});

router.patch("/:id", (req, res) =>{
  const {id} = req.params;
  const body = req.body;
  const updatedProduct = service.update(id, body);
  res.status(200).json(updatedProduct);
});


router.delete("/:id", (req, res) =>{
  const {id} = req.params;
  const answer = service.delete(id);
  res.status(200).json(answer);
});

module.exports = router;
