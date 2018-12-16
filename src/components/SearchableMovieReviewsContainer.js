import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

export default class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super()
    this.state = {
      reviews: [],
      searchTerm: ""
    }
  }

  onSubmit(event) {
    event.preventDefault()

    fetch("https://api.nytimes.com/svc/movies/v2/reviews/search.json?")
      .then(res => res.json())
      .then(data => {
        this.setState({
          reviews: data
        })
      })
  }

  render() {
    return(
      <div className="searchable-movie-reviews">
        <form onSubmit={this.onSubmit}>
        </form>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}
