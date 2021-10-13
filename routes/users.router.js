const express = require("express");
const faker = require("faker");
const router = express.Router();

// router.get("/users", (req, res) => {
//   const {limit, offset} = req.query;
//   if (limit && offset){
//     res.json({
//       limit,
//       offset
//     })
//   }else{
//     res.send("no hay parametros");
//   }
// });

router.get("/", (req, res) =>{
  const users = [];
  const {size} = req.query;
  const limit = size || 5;
  for (let index = 0; index < limit; index++){
    users.push({
      name: faker.name.firstName(),
      lastname: faker.name.lastName(),
      email: faker.internet.email(),
    });
  };
  res.json(users);
});

router.post("/", (req, res) =>{
  const body = req.body;
  res.status(201).json({
    message: "created",
    data: body,
  });
});

router.delete("/:id", (req, res) =>{
  const {id} = req.params;
  res.json({
    message: "deleted",
    id,
  });
});

module.exports = router;
