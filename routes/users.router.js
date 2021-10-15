const express = require("express");
const UserService = require("../services/userService");

const router = express.Router();
const service = new UserService();

router.get("/", (req, res) =>{
  const users = service.find();
  res.json(users);
});

router.post("/", (req, res) =>{
  const body = req.body;
  const newUser = service.create(body);
  res.status(201).json(newUser);
});

router.delete("/:id", (req, res) =>{
  const {id} = req.params;
  const answer = service.delete(id);
  res.status(200).json(answer);
});

module.exports = router;
