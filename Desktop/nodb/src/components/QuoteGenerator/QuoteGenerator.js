import React, { Component } from "react";
import axios from "axios";
// import FavButton from "../FavButton/FavButton";

class QuoteGenerator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quote: {},
      favoriteQuotes: []
    };
  }
  componentDidMount() {
    axios.get("/api/favorites").then(res => {
      this.setState({ quote: res.data });
      console.log(this.state.quote);
    });
  }

  // addFavorite() {
  //   axios.post("/api/favorites", { quote });
  // }

  render() {
    return <p> Hi </p>;
  }
}

export default QuoteGenerator;
