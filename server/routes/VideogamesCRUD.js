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

//Login
router.post("/ope/login", (req,res)=> {
  const un = req.body.nickname
  const pw = req.body.password

  if( un == 'ciao' && pw == 'ciao' ) {
    // lggato ok
    return res.status(200).json({message: 'ok', un, pw})
  }

  return res.status(200).json({message: 'error'})
})

//GET a single Videogame
//router.get("/:id", getVideogame);

// POST a new Videogame
router.post("/adminPanel", createVideogame);

// DELETE a Videogame
router.delete("/:id", deleteVideogame);

//PATCH a Videogame
router.patch("/:id", updateVideogame);

module.exports = router
