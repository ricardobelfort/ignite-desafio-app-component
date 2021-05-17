import { useEffect, useState } from 'react';
import Content, { IMovies } from './components/Content';
import SideBar, { Itabs } from './components/SideBar';

import { api } from './services/api';

import './styles/global.scss';

export function App() {
  const [genres, setGenres] = useState<Itabs[]>([]);

  const [movies, setMovies] = useState<IMovies[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<Itabs>({} as Itabs);

  useEffect(() => {
    api.get<Itabs[]>('genres').then((response) => {
      setGenres(response.data);
    });
  }, []);

  const handleGenreSelect = (id: number) => {
    api.get<IMovies[]>(`movies/?Genre_id=${id}`).then((response) => {
      setMovies(response.data);
    });

    api.get<Itabs>(`genres/${id}`).then((response) => {
      setSelectedGenre(response.data);
    });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar tabs={genres} onClickTabs={handleGenreSelect} />
      <div className="container">
        <header>
          <span className="category">
            Categoria:<span> {selectedGenre.title}</span>
          </span>
        </header>

        <main>
          <Content movies={movies} />
        </main>
      </div>
    </div>
  );
}
