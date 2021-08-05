import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Link } from "react-router-dom";

const HomeSliderBlock = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  background: url(${(props) => props.bgUrl});
  background-size: cover;
  opacity: 0.8;
`;

const Info = styled.div`
  position: absolute;
  bottom: 100px;
  left: 30px;
  display: flex;
  flex-direction: column;
  @media (max-width: 1080px) {
    bottom: 30px;
  }
`;

const Title = styled.div`
  color: white;
  font-size: 60px;
  font-weight: 500;
  margin-bottom: 20px;
`;

const Button = styled(Link)`
  padding: 10px 20px;
  width: fit-content;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
  background: white;
  color: black;
  font-size: 20px;
`;

const HomeSlider = ({ nowPlaying, isMovie }) => {
  const carousel = useRef();
  const [handler, setHandler] = useState(null);
  const settings = {
    ref: carousel,
    visibleSlides: 1,
    totalSlides: nowPlaying.length,
    naturalSlideWidth: 100,
    naturalSlideHeight: 50,
    infinite: true,
    step: 1,
  };

  useEffect(() => {
    if (handler) clearInterval(handler);
    setHandler(
      setInterval(() => {
        if (carousel.current) {
          const {
            setStoreState,
            getStoreState,
          } = carousel.current.carouselStore;
          const { currentSlide } = getStoreState();

          const nextSlide =
            currentSlide + 1 > nowPlaying.length ? 0 : currentSlide + 1;

          setStoreState({
            currentSlide: nextSlide,
          });
        }
      }, 5000)
    );
    return () => {
      clearInterval(handler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <CarouselProvider {...settings}>
      <Slider>
        {nowPlaying.map((now, idx) => (
          <Slide key={now.id} index={idx}>
            <HomeSliderBlock>
              <Backdrop
                bgUrl={
                  now.backdrop_path &&
                  `https://image.tmdb.org/t/p/original${now.backdrop_path}`
                }
              />
              <Info>
                <Title>
                  {isMovie ? now.original_title : now.original_name}
                </Title>
                <Button to={isMovie ? `movie/${now.id}` : `tv/${now.id}`}>
                  More
                </Button>
              </Info>
            </HomeSliderBlock>
          </Slide>
        ))}
      </Slider>
    </CarouselProvider>
  );
};

export default HomeSlider;
