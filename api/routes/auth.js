import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("AUTH");
});

router.get("/register", (req, res) => {
  res.send("REGISTER");
});
export default router;
