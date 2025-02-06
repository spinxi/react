
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import useFetch from '../hooks/useFetch';

const Movies = () => {
  const { data: movies, loading, error } = useFetch('https://api.sampleapis.com/movies/animation');

  return (
    <motion.div 
      className="container mt-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="mb-4">Movies</h1>
      {loading && <p>Loading movies...</p>}
      {error && <p>Error loading movies.</p>}
      <div className="row">
        {Array.isArray(movies) && movies.length > 0 ? (
          movies.map(movie => (
            <motion.div
              key={movie.id}
              className="col-md-4 mb-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="card h-100 shadow">
                {movie.posterURL ? (
                  <img src={movie.posterURL} alt={movie.title} />
                ) : (
                  <img src="https://via.placeholder.com/300x300?text=No+Image" alt="No Poster" />
                )}
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{movie.title}</h5>
                  <p className="card-text flex-grow-1">
                    {movie.plot ? movie.plot.substring(0, 100) + '...' : 'No description available.'}
                  </p>
                  <Link to={`/movies/${movie.id}`} className="btn btn-primary mt-3">View Details</Link>
                </div>
              </div>
            </motion.div>
          ))
        ) : (
          <p>No movies available.</p>
        )}
      </div>
    </motion.div>
  );
};

export default Movies;
