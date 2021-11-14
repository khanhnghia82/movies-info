import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const movies = [
  "https://m.media-amazon.com/images/I/61Fm+N+NncL._AC_SL1008_.jpg",
  "https://i.pinimg.com/originals/a9/c7/d3/a9c7d36b3aaee651d8f120257587e27b.jpg",
  "https://i.pinimg.com/originals/d9/b9/07/d9b9070c855d7c226c9a26a675c93142.jpg",
  "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/adventure-movie-poster-template-design-7b13ea2ab6f64c1ec9e1bb473f345547_screen.jpg?ts=1576732289",
  "http://cdn.shopify.com/s/files/1/0290/5663/0868/products/australianbackpacker999x666_1200x.jpg?v=1618847022",
  "https://3.bp.blogspot.com/-XU3gtu_wI6g/WpxBFPk1p0I/AAAAAAAACEw/0JoIwjhNmjs-JrTYJddrGaNL2o32M-WEgCLcBGAs/s1600/Screen%2BShot%2B2018-03-04%2Bat%2B18.53.17.png",
  "https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1280x1280/products/87108/88101/edge_of_tomorrow_regular_buy_original_movie_posters_at_starstills__48110.1400669257.jpg?c=2",
  "https://i.pinimg.com/originals/0f/b4/1f/0fb41ff936741bb71415352180b86611.jpg",
  "https://cdn.shopify.com/s/files/1/0747/3829/products/mL1755_1024x1024.jpg?v=1571445470",
  "https://i.pinimg.com/originals/6d/6a/6c/6d6a6c1cba5068c1626adedf00db5865.jpg",
  "https://www.discountdisplays.co.uk/our-blog/wp-content/uploads/tomb-raider-long-neck-691x1024.jpg",
];

function Contents(props) {  
  const sliderRef = useRef();  
  const itemRef = useRef();
  const [dragDown, setDragDown] = useState(0);
  const [dragUp, setDragUp] = useState(0);
  const [mouseLeave, setMouseLeave] = useState(false);
    
  const handleScrollRight = () => {
    const maxScrollLeft =
      sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
    if (sliderRef.current.scrollLeft < maxScrollLeft)
      sliderRef.current.scrollBy(itemRef.current.clientWidth * 2, 0); 
      // sliderRef.current.scrollBy({
      //   left: +(itemRef.current.clientWidth * 2),
      //   behavior: "smooth",
      // });     
  };

  const handleScrollLeft = () => {
    if (sliderRef.current.scrollLeft > 0)
      sliderRef.current.scrollBy(-itemRef.current.clientWidth * 2, 0);
      // sliderRef.current.scrollBy({
      //   left: -(itemRef.current.clientWidth * 2),
      //   behavior: "smooth",
      // });
  };

  useEffect(() => {
    if (dragUp < dragDown && mouseLeave) handleScrollRight();
    if (dragUp > dragDown && mouseLeave) handleScrollLeft();
  }, [dragDown, dragUp, mouseLeave]);

  useEffect(() => {
    const REF = sliderRef.current;    
    function handleMouseUp(e) {
      setDragUp(e.pageX);
      setMouseLeave(true);
    }
    function handleMouseDown(e) {
      setDragDown(e.pageX);
      setMouseLeave(false);
    }
    function handleScroll(e) {                 
      
      e.target.scrollIntoView({ behavior: "smooth" });
    }    

    REF.addEventListener("mouseup", handleMouseUp);
    REF.addEventListener("mousedown", handleMouseDown);
    REF.addEventListener("scroll", handleScroll);    

    return () => {
      REF.removeEventListener("mouseup", handleMouseUp);
      REF.removeEventListener("mousedown", handleMouseDown);
      REF.removeEventListener("scroll", handleScroll);  
    };
  });

  return (
    <ContentsSection draggable="false">
      <h1 className="heading">Title movies</h1>      
        <InfoMoviesSlider ref={sliderRef} draggable="false">
          {movies.length > 0 &&
            movies.map((movie, index) => (
              <div
                key={index}
                className="movieItem"
                draggable="false"
                ref={itemRef}
              >
                <img
                  src={movie}
                  alt=""
                  draggable="false"
                  onDragStart={(e) => {
                    e.preventDefault();
                  }}
                />
              </div>
            ))}
        </InfoMoviesSlider>     

      <div className="btnLeft" onClick={handleScrollLeft}>
        <FiChevronLeft />
      </div>
      <div className="btnRight" onClick={handleScrollRight}>
        <FiChevronRight />
      </div>
    </ContentsSection>
  );
}

export default React.memo(Contents);

const ContentsSection = styled.section`
  background-color: var(--color-background);
  color: var(--color-white); 
  padding-top: 100px;
  padding-right: 20px;
  padding-left: 20px;
  position: relative;
  width: 100%;
  height: 100%;    
  .heading {
    font-size: 18px;
    margin-bottom: 12px;
    user-select: none;
  }
  .btnLeft {
    position: absolute;
    top: 50%;    
    left: 12px;
    transform: translateY(100%);
    z-index: 20;
    transform-origin: center;
    cursor: pointer;
    background-color: rgba(0,0,0,0.4);
    
    svg {
      opacity: 0.7;
      font-size: 50px;
      transition: all 0.3s ease-out;
      &:hover {
        opacity: 1;
        transform: scale(1.2);
      }
    }
  }
  .btnRight {
    position: absolute;
    top: 50%;    
    right: 12px;
    transform: translateY(100%);
    z-index: 20;
    transform-origin: center;
    cursor: pointer;
    background-color: rgba(0,0,0,0.4);
    
    svg {
      opacity: 0.7;
      font-size: 50px;
      transition: all 0.3s ease-out;
      &:hover {
        opacity: 1;
        transform: scale(1.2);
      }
    }
`;

const InfoMoviesSlider = styled.div`
  display: grid;
  gap: 6px;
  grid-template-columns: repeat(${movies.length}, 300px);
  transition: all 0.3s linear;
  user-select: none;
  overflow-y: hidden;
  overflow-x: auto;
  overflow: hidden;  
  padding-top: 28px;
  padding-bottom: 28px;
  scroll-behavior: smooth;

  .movieItem {
    transform: scale(1);
    max-width: 320px;
    max-height: 400px;
    width: 100%;
    height: 100%;
    transition: all 0.3s ease-out;
    user-select: none;
    overflow: hidden;
    border-radius: 6px;
    transform: center left;

    &:hover {
      transform: scale(1.1);
      z-index: 10;
      -webkit-filter: brightness(1) !important;
      filter: brightness(1) !important;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
