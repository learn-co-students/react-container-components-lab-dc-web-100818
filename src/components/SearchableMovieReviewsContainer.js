import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super()
    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }

  getReview = (e) => {
    e.preventDefault();
    let term = e.target.firstChild.value;

    fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=f98593a095b44546bf4073744b540da0&query=${term}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          reviews: data.results
        })
      })

    this.setState({
      searchTerm: term
    })

  }

  test = (e) => {
    e.target.firstChild.value = this.state.searchTerm
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.getReview}>
          <input onChange={(e) => this.test} type="text"></input>
          <input type="submit"></input>
        </form>
        <div>
          <MovieReviews reviews={this.state.reviews} />
          
        </div>
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer;