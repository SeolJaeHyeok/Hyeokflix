import Loader from "components/common/Loader";
import Poster from "components/common/Poster";
import React from "react";
import Slider from "react-slick";
import styled, { keyframes } from "styled-components";

const PersonViewerBlock = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 50px;
`;

const Content = styled.div`
  font-family: serif;
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const showAnim = keyframes`
0% {
    opacity: 0;
}
50% {
    opacity: 0;
}
100% {
    opacity: 1;
}
`;

const Cover = styled.div`
  /* position: sticky; */
  width: 30%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  height: 100%;
  border-radius: 5px;
  position: fixed;
  top: 100px;
  animation-name: ${showAnim};
  animation-duration: 1.5s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
`;

const Data = styled.div`
  width: 65%;
  margin-left: auto;
  position: relative;
  float: right;
  animation-name: ${showAnim};
  animation-duration: 1.8s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
`;

const Name = styled.span`
  font-size: 32px;
`;

const Department = styled.span`
  margin-left: 10px;
  font-size: 24px;
  color: #bdc3c7;
`;

const Birthday = styled.div`
  font-size: 14px;
  padding: 5px 0px;
  color: #bdc3c7;
`;

const PlaceOfBirth = styled.div`
  font-size: 14px;
  padding: 5px 0px;
  color: #bdc3c7;
`;

const BiographyTitle = styled.div`
  margin-top: 10px;
  font-size: 24px;
`;

const Biography = styled.div`
  font-size: 18px;
  padding: 5px 0px;
  color: #bdc3c7;
`;

const Title = styled.div`
  margin: 10px 0px;
  font-size: 24px;
`;

const PersonViewer = ({
  result,
  movieResults,
  showResults,
  error,
  loading,
}) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 8,
  };
  return loading ? (
    <Loader />
  ) : (
    <PersonViewerBlock>
      <Content>
        <Cover
          bgImage={
            result.profile_path
              ? `https://image.tmdb.org/t/p/original${result.profile_path}`
              : "https://kknd26.ru/images/no-photo-nevinka.png"
          }
        />
        <Data>
          <Name>{result.name}</Name>
          <Department>{result.known_for_department}</Department>
          <Birthday>{result.birthday}</Birthday>
          <PlaceOfBirth>{result.place_of_birth}</PlaceOfBirth>
          <BiographyTitle>Biography</BiographyTitle>
          <Biography>{result.biography}</Biography>
          <Title>Movie</Title>
          <Slider {...settings}>
            {movieResults.cast.map((movie) => (
              <Poster
                id={movie.id}
                imageUrl={movie.poster_path}
                title={movie.original_title}
                rating={movie.vote_average}
                year={movie.release_date}
                isMovie={true}
              />
            ))}
          </Slider>
          <Title>TV Shows</Title>
          <Slider {...settings}>
            {showResults.cast.map((show) => (
              <Poster
                id={show.id}
                imageUrl={show.poster_path}
                title={show.original_title}
                rating={show.vote_average}
                year={show.release_date}
                isMovie={true}
              />
            ))}
          </Slider>
        </Data>
      </Content>
    </PersonViewerBlock>
  );
};

export default PersonViewer;
