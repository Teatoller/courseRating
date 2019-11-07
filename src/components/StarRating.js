import React, { Component } from "react";
import Star from "./Star";

class StarRating extends Component {
  constructor() {
    super();
    // Initialize a 'rating' state
    this.state = {
      rating: 0
    };
    this.renderStars = this.renderStars.bind(this);
  }

  // Write a function that returns 5 Star components
  renderStars() {
    let stars = [];
    let maxRating = 5;

    for (let i = 0; i < maxRating; i++) {
      stars.push(<Star key={i} />);
    }
    return stars;
  }

  // Write an event handler that updates the rating state
  //    Pass the function to a Star component via props

  render() {
    console.log(this.state);
    return (
      <ul className="course--stars">
        {/* Render the Star components */}
        {this.renderStars()}
      </ul>
    );
  }
}

export default StarRating;
