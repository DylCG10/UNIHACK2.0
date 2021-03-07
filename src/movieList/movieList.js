import React, { Component } from 'react';
import Movie from '../server/script.js';
import MovieDetails from './movieDetails.js';

class MovieList extends Component {
    state = {
      players: []
    };
  
    componentDidMount() {
      this.setState({
        players: MovieDetails
      });
    }
  
    voteHandler = movieId => {
      const voteMovie = this.state.players.map(movie => {
        if (movieId === movie.id) {
          return Object.assign({}, movie, {
            votes: movie.votes + 1
          });
        } else {
          return movie;
        }
      });
  
      this.setState({
        movies: voteMovie
      });
    };
    render() {
      //sort movies with highest votes
  
      let sortMovies = this.state.movies.sort((a, b) => {
        return b.votes - a.votes;
      });
      const movies = sortMovies.map(movie => (
        <Movie
          key={movie.id}
          id={movie.id}
          name={movie.name}
          votes={movie.votes}
          imageUrl={movie.imageUrl}
        //   clubUrl={movie.clubUrl}
          votemovie={this.voteHandler}
        />
      ));
      return <div className="ui divided unstackable items main">{movies}</div>;
    }
  }
  
  export default Component;