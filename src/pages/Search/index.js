import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { useViewport } from "../../hooks";
import { getSeachMovies, setMovieDetails } from "../../store/actions";
import MovieDetailsPage from "../MovieDetails";

const IMAGE_URL = process.env.REACT_APP_BASE_IMAGE_URL;

const useQuery = () => new URLSearchParams(useLocation().search);

function SearchPage(props) {
  const dispatch = useDispatch();
  const { SearchMovies, MovieDetails } = useSelector((state) => state.infoMovies);  
  const keywords = useQuery().get("keywords");
  const [windowDimensions] = useViewport();

  useEffect(() => {
    if (keywords) dispatch(getSeachMovies(keywords));
  }, [keywords, dispatch]);

  return (
    <>
      <SearchPane>
        {SearchMovies && SearchMovies.length > 0 ? (
          <div
            className="searchContent"
            style={{ gridTemplateColumns: `repeat(${windowDimensions.width>1200 ? 5 : windowDimensions.width>992 ? 4 : windowDimensions.width>768 ? 3 : windowDimensions.width>600 ? 2 : 1 }, auto)`}}
          >
            {SearchMovies.map((movie, index) => {
              if (
                movie.backdrop_path !== null &&
                movie.media_type !== "person"
              ) {
                const imageUrl = `${IMAGE_URL}/w500/${movie.backdrop_path}`;                  
                return (
                  <div
                    key={index}
                    className="movieItem"
                    onClick={() => dispatch(setMovieDetails(movie))}
                    // style={{backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover'}}
                  >
                    <img src={imageUrl} alt={movie.title || movie.name} />
                    <span>{movie.title || movie.name}</span>
                  </div>
                );
              }
            })}
          </div>
        ) : (
          <NotFound>
            <h2>Your search for "{keywords}" did not have any matches.</h2>
          </NotFound>
        )}
      </SearchPane>
      <MovieDetailsPage showModal={MovieDetails ? true : false} movie={MovieDetails}/>

    </>
  );
}

export default SearchPage;

const SearchPane = styled.div`
  width: 100%;
  min-height: 92vh;
  padding-top: var(--height-navbar);
  background: var(--color-background);
  transition: all 0.3s ease;
  .searchContent {
    padding: 40px 60px;
    display: grid;
    gap: 8px;
    &:hover .movieItem {
      opacity: 0.7;
    }

    .movieItem {
      position: relative;
      max-width: 400px;
      width: 100%;
      height: 200px;
      margin: 20px 0;
      border-radius: 12px;
      overflow: hidden;
      transform: scale(1);
      transition: all 0.3s ease;
      &:hover {
        transform: scale(1.2);
        z-index: 10;
        opacity: 1;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      span {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        text-align: center;
        padding: 4px;
        background: rgba(0, 0, 0, 0.5);
        color: var(--color-white);
      }
    }
  }
`;
const NotFound = styled.div`
  padding: 5rem 8rem;
  color: var(--color-white);
`;
