import express from "express";
import User from "../models/userModel";

const router = express.Router();

router.get("/api/users/createAdmin", async (req, res) => {
  try {
    const user = new User({
      name: "Tolu",
      email: "tosebikan@gmail.com",
      password: "1234",
      admin: true
    });

    const newUser = await user.save();
    res.send(newUser);
  } catch (error) {
    res.send({ msg: error.message });
  }
});
