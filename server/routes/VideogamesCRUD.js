

const express = require("express");
const router = express.Router();
const {
  createVideogame,
  getVideogame,
  getVideogames,
  deleteVideogame,
  updateVideogame
} = require("../controller/videogameController");


// GET all Videogames
router.get("/", getVideogames),

//GET a single Videogame
router.get("/:id", getVideogame);

// POST a new Videogame
router.post("/adminPanel", createVideogame);

// DELETE a Videogame
router.delete("/:id", deleteVideogame);

//PATCH a Videogame
router.patch("/:id", updateVideogame);

module.exports = router
