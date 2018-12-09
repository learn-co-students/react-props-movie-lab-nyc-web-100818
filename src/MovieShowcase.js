import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'


export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    return movieData.map((x, i) =>
    <MovieCard key={i} {...x}/>);
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
