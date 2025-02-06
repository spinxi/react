import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import useFetch from '../hooks/useFetch';

const MovieDetails = () => {
  const { id } = useParams();
  const { data: movies, loading, error } = useFetch('https://api.sampleapis.com/movies/animation');

  const movie = Array.isArray(movies)
    ? movies.find(m => String(m.id) === id)
    : null;

  return (
    <motion.div 
      className="container mt-5"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
    >
      <Link to="/movies" className="btn btn-secondary mb-3">&larr; Back to Movies</Link>
      {loading && <p>Loading movie details...</p>}
      {error && <p>Error loading details.</p>}
      {movie ? (
        <div className="card shadow">
          {movie.posterURL ? (
            <img src={movie.posterURL} alt={movie.title} className="card-img-top" />
          ) : (
            <img src="https://via.placeholder.com/600x400?text=No+Image" alt="No Poster" className="card-img-top" />
          )}
          <div className="card-body">
            <h2 className="card-title">{movie.title}</h2>
            <p className="card-text"><strong>Year:</strong> {movie.year}</p>
            <p className="card-text">{movie.plot}</p>
          </div>
        </div>
      ) : (
        <p>Movie not found.</p>
      )}
    </motion.div>
  );
};

export default MovieDetails;
