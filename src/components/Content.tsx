import React from 'react';
import { MovieCard } from './MovieCard';

import '../styles/content.scss';

export interface IMovies {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

interface IProps {
  movies: IMovies[];
}

const Content: React.FC<IProps> = ({ movies }) => {
  return (
    <div className="movies-list">
      {movies.map((movie) => (
        <MovieCard
          key={movie.imdbID}
          title={movie.Title}
          poster={movie.Poster}
          runtime={movie.Runtime}
          rating={movie.Ratings[0].Value}
        />
      ))}
    </div>
  );
};

export default Content;
