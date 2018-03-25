const axios = require("axios");
let favorites = [];
let ranQuote = [];
let title = "Orange Overlord";

module.exports = {
  getQuotes: (req, res) => {
    axios
      .get("https://api.whatdoestrumpthink.com/api/v1/quotes/random")
      .then(response => {
        console.log(res.data);
        ranQuote = response.data.message;
        res.status(200).send(ranQuote);
      });
  },
  getFavorites: (req, res) => {
    res.status(200).json(favorites);
  },

  addFavorite: (req, res) => {
    favorites.push;
  },
  updateTitle: (req, res) => {
    title = req.params.id;
    res.status(200).json(title);
  },
  deleteFavorite: (req, res) => {
    favorites.splice(req.params.id, 1);
    res.status(200).json(favorites);
  }
};
