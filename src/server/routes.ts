import * as express from "express";

const router = express.Router();

router.get("/api/hello", (req, res, next) => {
  res.json("World");
});

router.get("/api/working", (req, res, next) => {
  res.json("It is working");
});

export default router;
