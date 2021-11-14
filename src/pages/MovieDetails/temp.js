import React from 'react';
import styled, {keyframes} from 'styled-components';

function MovieDetailsPage(props) {
  return (
    <MovieDetailsWrapper>
      <div className="backdrop"></div>
      <div className="modal" >
        <div className="container"style={{backgroundImage: `url(https://sm.ign.com/t/ign_in/gallery/s/spider-man/spider-man-far-from-home-official-movie-posters_epch.1080.jpg)`, backgroundSize:'cover'}} >
          {/* <img src="https://sm.ign.com/t/ign_in/gallery/s/spider-man/spider-man-far-from-home-official-movie-posters_epch.1080.jpg" alt="" className='image' /> */}
          <div className="infoMovie">
            <h1 className="title">Title Movie</h1>  
            <p className="rating">Rating: 60%</p>
            <p className="releaseDate">Release date: </p>
            <p className="runtime">Runtime: </p>
          
            <p className="episode">episode</p>
            <p className="overview">After a massive alien artifact lands on Earth, Niko Breckinridge leads an interstellar mission to track down its source and make first contact.</p>
          </div>
        </div>

      </div>
    </MovieDetailsWrapper>
  );
}

export default MovieDetailsPage;
const fadeIn = keyframes`
  0% {
    background: rgba(0, 0, 0, 0);
  }
  100% {
    background: rgba(0, 0, 0, 0.7);
  }
`
const MovieDetailsWrapper = styled.div`
  width: 100%;
  height: 100%;  
  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 200;  
    background-color: rgba(0,0,0,0.6);
    animation: ${fadeIn} 1s cubic-bezier(0.17, 0.85, 0.45, 1) forwards;
  }
  .modal {
    position: fixed;
    z-index: 500;
    width: 100%;
    top: 0;
    left: 0;
    color: #fff;
    height: 52rem;
    opacity: 1;
    box-shadow: 0 15px 40px rgba(var(--color-dark), 0.2);
    transition: all 0.3s;

    @media only screen and (max-width: 1184px) {
      height: 38rem;
    }
    @media only screen and (max-width: 600px) {
      height: 50rem;
    }

    .container {      
      width: 70%;
      height: 100%;
      margin-top: 30px;
      margin-left: 50px;                
      background: linear-gradient(90deg, #000 50%, transparent);      
  
      @media only screen and (max-width: 1184px) {
        background: linear-gradient(
          90deg,
          rgb(0, 0, 0) 55%,
          rgba(0, 0, 0, 0.733),
          transparent
        );
        width: 88%;     
      }
      @media only screen and (max-width: 980px) {
        background: linear-gradient(90deg, rgba(0, 0, 0, 0.966) 65%, transparent);
        width: 100%;
      }
      @media only screen and (max-width: 600px) {        
        margin-top: 10px;
        margin-left: 10px; 
      }  
      
      .infoMovie {        
        width: 50%; 
        height: 100%; 
        padding-left: 20px;
        color: #fff;
        font-size: 20px;        
        
        .title {
          margin-top: 30px;
        }        
        .rating {
          margin-top: 30px;
          color: var(--color-green-modal);
        }
        .releaseDate, .runtime, .episode {
          margin-top: 12px;
        }
        .overview {
          margin-top: 20px;
          color: var(--color-white);
        }
      }
    } 
  }
`
