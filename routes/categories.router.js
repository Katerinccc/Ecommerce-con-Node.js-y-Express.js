const express = require("express");

const router = express.Router();

router.get("/categories", (req, res) =>{
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

router.get("/categories/:categoryId/products/:productId", (req, res) =>{
  const {categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId
  });
});

module.exports = router;