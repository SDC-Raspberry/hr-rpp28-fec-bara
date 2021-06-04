// overall component for review/rating widget
// as you code, you will need to import each new component and return it withtin render

import React from 'react';
import ReviewList from './ReviewList.jsx';

class ReviewWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productReviews: [],
      sortBy: 'Relevance',
      displayXReviews: 2,
      filters: []
      //more things to keep track of ?
    };

  }

  //functions that will need to be passed to different components as props
  // how do i get what the current product is?
  // compoenet render?
  // get product reviews... also use the state for how many to display
  getProductReviews() {
    //api request
  }

  render() {
    return (
      <div>
        <h3>REVIEW AND RATING WIDGET</h3>
        <ReviewList reviews = {this.state.productReviews} />
      </div>
    );
  }
}

// this will be imported by app.jsx
export default ReviewWidget;