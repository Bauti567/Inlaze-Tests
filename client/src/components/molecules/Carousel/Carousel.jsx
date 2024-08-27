import React, { useEffect, useState } from 'react';

function Carousel() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    async function fetchTopRatedFilms() {
      try {
        const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=95f50caa461c4aeecaff28e0a6458241');
        const data = await response.json();
        setFilms(data.results);
      } catch (error) {
        console.error('Error fetching top rated films:', error);
      }
    }

    fetchTopRatedFilms();
  }, []);

  return (
    <div id="carouselExampleCaptions" className="carousel slide" style={{ width: '100%', height: '436px' }}>
      <div className="carousel-inner">
        {films.map((film, index) => (
          <div key={film.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
            <img
              src={`https://image.tmdb.org/t/p/w1280${film.backdrop_path}`} // Usar backdrop_path para imágenes más anchas
              className="d-block w-100"
              alt={film.title}
              style={{ height: '500px', objectFit: 'cover' }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>{film.title}</h5>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
