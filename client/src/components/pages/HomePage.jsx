import React from "react";
import Navbar from "../organisms/Navbar/Navbar";
import FilmsList from "../molecules/FilmsList/FilmsList";
import Favorites from "../molecules/Favorites/Favorites";
import Carousel from "../molecules/Carousel/Carousel";


function HomePage() {
  return (
    <div>
      <Navbar></Navbar>
      <Carousel></Carousel>
      <h1>Aplicacion de peliculas</h1>
      <FilmsList
        title="Popular Films"
        apiEndpoint="https://api.themoviedb.org/3/movie/popular?api_key=95f50caa461c4aeecaff28e0a6458241"
      />
      <FilmsList
        title="Now Playing"
        apiEndpoint="https://api.themoviedb.org/3/movie/now_playing?api_key=95f50caa461c4aeecaff28e0a6458241"
      />
      <FilmsList
        title="Upcoming"
        apiEndpoint="https://api.themoviedb.org/3/movie/upcoming?api_key=95f50caa461c4aeecaff28e0a6458241"
      />
      <FilmsList
        title="Top Rated"
        apiEndpoint="https://api.themoviedb.org/3/movie/top_rated?api_key=95f50caa461c4aeecaff28e0a6458241"
      />

      <Favorites/>
      
    </div>
  );
}

export default HomePage;
