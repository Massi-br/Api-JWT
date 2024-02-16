const express = require("express");
const router = express.Router();
const authenticateToken = require("../auth");
const MazeModel = require("../../models/Maze");

router.use(authenticateToken.required);

router.get("/", async (req, res) => {
  try {
    const mazes = await MazeModel.find();
    res.status(200).json(mazes);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
