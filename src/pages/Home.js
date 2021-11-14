import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Contents from "../components/Contents";
import Intro from "../components/Intro";
import Menus from "../components/Menus";
import MovieDetailsPage from "./MovieDetails";

function Home(props) {
  const { MovieDetails } = useSelector((state) => state.infoMovies);
  const [isShowMovieDetails, setIsShowMovieDetails] = useState(false);

  useEffect(() => {
    setIsShowMovieDetails(MovieDetails ? true : false);
  }, [MovieDetails]);

  return (
    <div>
      <Intro />
      <Contents />
      <MovieDetailsPage showModal={isShowMovieDetails} movie={MovieDetails} />
      <Menus />
    </div>
  );
}

export default Home;
