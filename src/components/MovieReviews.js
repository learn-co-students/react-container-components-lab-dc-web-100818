import React, {Component} from "react"

const MovieReviews = (props) => (
  <div className="review-list">
    {props.reviews.map(review => (
      <div className="review">

      </div>
    ))}
  </div>
)

export default MovieReviews
