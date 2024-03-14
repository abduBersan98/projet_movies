import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import films from './films';

function MoviesList() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <div>
      <h2>List of Movies</h2>
      <Slider {...settings}>
        {films.map((movie) => (
          <div className="movie-slide" key={movie.id}>
            <div className="movie-content">
              <img className="movieImage" src={movie.poster} alt={movie.title} />
              <div className="movie-details">
                <h3>{movie.title}</h3>
                <p>{movie.description}</p>
                <p>Rating: {movie.rating}</p>
                <p>Actors: {movie.actors.join(', ')}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default MoviesList;
