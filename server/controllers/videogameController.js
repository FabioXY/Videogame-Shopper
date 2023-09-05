const Videogame = require("../models/VideogameModel");
const mongoose = require("mongoose");

//get all videogames
const getVideogames = async (req, res) => {
  const videogames = await Videogame.find({});
  res.status(200).json(videogames);
};

//get a single videogame
const getVideogame = async (req, res) => {
  const { id } = req.params;

  //check if the ID is valid
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No videogame find" });
  }

  const videogame = await Videogame.findById(id);

  if (!videogame) {
    return res.status(404).json({ error: "no videogame find" });
  }

  res.status(200).json(videogame);
};

//create a new videogame
const createVideogame = async (req, res) => {
  const { title, platform, PEGI, price, discount, genere, description } =
    req.body;

  //add doc to DB
  try {
    const videogame = await Videogame.create({
      title,
      platform,
      PEGI,
      price,
      discount,
      genere,
      description,
    });
    res.status(200).json(videogame);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//delete a videogame
const deleteVideogame = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No videogame find" });
  }

  const videogame = await Videogame.findOneAndDelete({ _id: id });

  if (!videogame) {
    return res.status(400).json({ error: "no videogame find" });
  }
  res.status(200).json(videogame);
};

//update a videogame
const updateVideogame = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No videogame find" });
  }
  const videogame = await Videogame.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );
  if (!videogame) {
    return res.status(400).json({ error: "no videogame find" });
  }

  res.status(200).json(videogame);
};

module.exports = {
  createVideogame,
  getVideogames,
  getVideogame,
  deleteVideogame,
  updateVideogame,
};
