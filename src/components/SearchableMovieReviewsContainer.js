import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}` + `&query=`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
  constructor(){
    super()

    this.state = {
    reviews: [],
    searchTerm: ""
    }
  }

  handleSubmit = (e) =>{
    e.preventDefault()
    fetch(URL + this.state.searchTerm)
    .then(res => res.json())
    .then(data => this.setState({reviews: data.results }))
  }

  handleSearch = (e) =>{
    e.persist()
    this.setState({searchTerm: e.currentTarget.value})
  }

  render(){
    return(
      <div className="searchable-movie-reviews">
          <form onSubmit={this.handleSubmit}>
            Search Movies: <input type="text"
            onChange={this.handleSearch} value={this.state.searchTerm}/>
            <input type="submit" />
          </form>
          <h3>Search Results: </h3>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}
