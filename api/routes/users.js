import express from "express";
import {
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/user.js";
import { verifyToken } from "../utils/verifyToken.js";
const router = express.Router();

router.get("/checkauthentication", verifyToken, (req, res, next) => {
  res.send("You're now logged in!");
});

//update
router.put("/:id", updateUser);

//delete
router.delete("/:id", deleteUser);

//get
router.get("/:id", getUser);

// get all
router.get("/", getUsers);
export default router;
