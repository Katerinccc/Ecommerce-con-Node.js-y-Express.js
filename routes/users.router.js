const express = require("express");
const UserService = require("../services/userService");
const validatorHandler = require("../middlewares/validatorHandler");
const {createUserSchema, getUserSchema} = require("../schemas/userSchema");

const router = express.Router();
const service = new UserService();

router.get("/", async (req, res) =>{
  const users = await service.find();
  res.json(users);
});

router.post("/",
  validatorHandler(createUserSchema, "body"),
  async (req, res) =>{
    const body = req.body;
    const newUser = await service.create(body);
    res.status(201).json(newUser);
  }
);

router.delete("/:id", async (req, res) =>{
  const {id} = req.params;
  const answer = await service.delete(id);
  res.status(200).json(answer);
});

module.exports = router;
