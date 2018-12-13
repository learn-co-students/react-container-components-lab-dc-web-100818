import React, { Component } from 'react'

const MovieReviews = (props) => {
  return (
    <div className="review-list">
      {props.reviews.map(rev => {
        return <div className="review" key={rev.display_title}>{rev.display_title}</div>
      })}
    </div>
  )
}

export default MovieReviews
