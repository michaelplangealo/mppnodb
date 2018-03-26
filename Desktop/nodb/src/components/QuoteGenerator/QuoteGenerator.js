import React, { Component } from "react";
import axios from "axios";
import FavButton from "../FavButton/FavButton";
import "./QuoteGenerator.css";

class QuoteGenerator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quote: "",
      favoriteQuotes: []
    };
    this.newQuote = this.newQuote.bind(this);
    this.addToFavorites = this.addToFavorites.bind(this);
  }
  componentDidMount() {
    this.newQuote();
  }

  newQuote() {
    axios
      .get("api/favorites/quotes")
      .then(response => {
        this.setState({ quote: response.data });
      })
      .catch(() => this.newQuote);
  }
  getFavorites() {
    axios
      .get("/api/favorites")
      .then(response => this.setState({ favoriteQuotes: response.data }))
      .catch(error => console.log(error));
  }
  addToFavorites() {
    let { quote, favoriteQuotes } = this.state;
    axios
      .post("/api/favorites", { quote })
      .then(response => this.setState({ favoriteQuotes: response.data }));
  }

  render() {
    const { quote } = this.state;
    return (
      <div>
        <header className="tippytop">
          <div className="white-space">
            <p> MAKE QUOTING GREAT AGAIN</p>
          </div>
        </header>
        <div className="quote-container">
          <div className="words-of-wisdom">{quote}</div>
        </div>
        <div className="buttons-console">
          <button className="add-button" onClick={() => this.newQuote()}>
            MAKE AMERICA GREAT AGAIN
          </button>
          <FavButton add={this.addToFavorites} />
        </div>
      </div>
    );
  }
}

export default QuoteGenerator;
