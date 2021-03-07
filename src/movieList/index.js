import React, { Component } from 'react';

import hp from './movieImages/harry-potter.jpg'

import '../styling/styles.css';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import { finalQuizRequest } from './actions';

const movie_list = [
    'architecture-101',
    'edge-of-tomorrow',
    'et',
    'exit',
    'harry-potter',
    'interstellar',
    'jaws',
    'jurassic-world',
    'mission-impossible',
    'oblivion',
    'parasite',
    'the-martian',
    'the-matrix',
    'the-wandering-earth',
    'tomorrowland'
]

const images = [
    { id: 'architecture-101', src: './movieImages/architecture-101.jpg', title: 'foo', description: 'bar' },
    { id: 2, src: './movieI/image02.jpg', title: 'foo', description: 'bar' },
    { id: 3, src: './assets/image03.jpg', title: 'foo', description: 'bar' },
    { id: 4, src: './assets/image04.jpg', title: 'foo', description: 'bar' },
    { id: 5, src: './assets/image05.jpg', title: 'foo', description: 'bar' },
  ];


class MovieList extends Component {

    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);

        this.state = {
            movies: []
        }
    }
    onSubmit(event) {
        event.preventDefault();
        // console.log(event.target.value);

        this.props.finalQuizRequest({movies: this.state.movies})
    }

    onChange(event) {
        this.setState({ movies: [...this.state.movies, event.target.value] })
    }


    render() {
        return (
            <div>
                <form onSubmit = {this.onSubmit}>

                {movie_list.map((movie) => (
                    <div>
                        <h1>{movie}</h1>
                        {console.log(require("./movieImages/" + movie + '.jpg'))}
                        <label className="container" for={`${movie}`}>
                                <input type="radio" id={`${movie}`} value={`${movie}`} onChange={this.onChange}/>
                            <img class = "image" src={require("./movieImages/" + movie + ".jpg").default} />
                        </label>
                        </div>

                ))
                    }
            <button type="submit">Submit</button>

                    </form>

                    
                {/* // <h1>{images[0].id}</h1> */}
                {/* // {console.log(images[0].src)} */}
                {/* // <img src={require("" + images[0].src)}></img> */}

            </div>
        )
    }

}

const mapStateToProps = state => ({
    movies: state.movies
  });
    
  const connected = connect(mapStateToProps, { finalQuizRequest })(MovieList);
  const formed = reduxForm({
    form: 'group_recommendations'
  })(connected);
  
export default formed;
  
// export default MovieList;
