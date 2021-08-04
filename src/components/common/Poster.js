import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const PosterBlock = styled.div`
  font-size: 12px;
  &:hover {
    transform: scale(1.05, 1.05);
  }
`;

const Image = styled.div`
  background-image: url(${(props) => props.bgUrl});
  height: 180px;
  background-size: cover;
  background-position: center center;
  border-radius: 5px;
  transition: opacity 0.1s linear;
`;

const ImageBlock = styled.div`
  margin-bottom: 5px;
  position: relative;
  &:hover {
    ${Image} {
      opacity: 0.3;
    }
  }
  transition: opacity 0.1s linear;
`;

const Title = styled.span`
  display: block;
  margin-bottom: 5px;
`;

const Year = styled.span`
  color: #95a5a6;
`;

const Poster = ({ id, imageUrl, title, year, isMovie }) => (
  <Link to={isMovie ? `/movie/${id}` : `/tv/${id}`}>
    <PosterBlock>
      <ImageBlock>
        <Image
          bgUrl={
            imageUrl
              ? `https://image.tmdb.org/t/p/w300${imageUrl}`
              : "https://kknd26.ru/images/no-photo-nevinka.png"
          }
        ></Image>
      </ImageBlock>
      <Title>{title}</Title>
      <Year>{year}</Year>
    </PosterBlock>
  </Link>
);

export default Poster;
