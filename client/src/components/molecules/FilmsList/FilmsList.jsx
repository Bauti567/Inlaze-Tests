import React, { useEffect, useState } from "react";

function FilmsList({ title, apiEndpoint }) {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(apiEndpoint);
      const data = await response.json();
      setFilms(data.results);
    }

    fetchData();
  }, [apiEndpoint]);

  return (
    <div>
      <h2>{title}</h2>
      {films.map((film) => {
        return (
          <div key={film.id}>
            <p>{film.title}</p>
            <img
              src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
              alt={film.title}
            />
          </div>
        );
      })}
    </div>
  );
}

export default FilmsList;
