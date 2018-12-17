import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
                 + `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends Component {
   constructor() {
      super()
      this.state = {
         searchTerm: '',
         reviews: []
      }
   }

   handleSearchInputChange = (event) => {
      this.setState({searchTerm: event.target.value})
   }

   handleSubmit =(event) => {
      event.preventDefault()
      fetch(URL.concat(this.state.searchTerm))
         .then(res => res.json())
         .then(data => this.setState({reviews: data.results}))
   }

   
   render() {
      return (
         <div className='searchable-movie-reviews'>
            <form onSubmit={this.handleSubmit}>
               <input type='text' onChange={this.handleSearchInputChange} />
               <button type='submit'>Search</button>
            </form>
            <h2>Movie Review By Search:</h2>
            <MovieReviews reviews={this.state.reviews}/>
         </div>
      )
   }
}

export default SearchableMovieReviewsContainer
