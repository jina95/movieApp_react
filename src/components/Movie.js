import React from 'react';
import PropTyeps from 'prop-types';
import { Link } from 'react-router-dom';
import "./Movie.css";

function Movie({ id, year, title, summary, poster, genres }) {
  return (
    <Link to={{
      pathname: `/movie/${id}`,
      state: {
        id, title, year, summary, poster, genres 
      }
    }}>
      <div className="movie">
        <img src={poster} alt={title} title={title}></img>
        <div className="movie__data">
          <h3 className="movie__title">{title}</h3>
          <h5 className="movie__year">{year}</h5>
          <ul className="genres">
            {genres.map((genre, index) => (
              <li className="genres__genre" key={index}>
                {genre}
              </li>
            ))}
          </ul>
          <p className="movie__summary">{summary.slice(0, 180)}...</p>
        </div>
      </div>
    </Link>
  );
}

Movie.prototype = {
  id: PropTyeps.number.isRequired,
  year: PropTyeps.string.isRequired,
  title: PropTyeps.string.isRequired,
  summary: PropTyeps.string.isRequired,
  poster: PropTyeps.string.isRequired,
  genres: PropTyeps.arrayOf(PropTyeps.string).isRequired,
};

export default Movie;