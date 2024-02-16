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

router.post("/", async (req, res) => {
  const { nameMaze } = req.body;
  if (!nameMaze) {
    return res.status(400).json({
      message: "Merci de bien vouloir entrer le nom du nouveau labyrinthe",
    });
  }
  const existingMaze = await MazeModel.findOne({ name: nameMaze });
  if (existingMaze) {
    return res.status(409).json({ error: "Le labyrinthe existe déjà" });
  }

  const newMaze = new MazeModel({ name: nameMaze });
  const savedMaze = await newMaze.save();

  return res.status(201).json(savedMaze);
});

module.exports = router;
