import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    return movieData.map(movie => {
      const {title, genres, IMDBRating, poster} = movie
      return(
        <MovieCard 
          title={title}
          genres={genres}
          IMDBRating={IMDBRating}
          poster={poster}
          />
      )
    })
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
