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

  render() {
    const { quote } = this.state;
    return (
      <grid>
        <header className="tippytop">
          <div className="white-space">
            <p> MAKE QUOTING GREAT AGAIN</p>
          </div>
        </header>
        <div className="quote-container">{quote}</div>
      </grid>
    );
  }
}

export default QuoteGenerator;
