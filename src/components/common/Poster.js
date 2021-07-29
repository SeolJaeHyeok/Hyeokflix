import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const PosterBlock = styled.div`
  font-size: 12px;
`;

const Image = styled.div`
  background-image: url(${(props) => props.bgUrl});
  height: 180px;
  background-size: cover;
  background-position: center center;
  border-radius: 5px;
  transition: opacity 0.1s linear;
`;

const Rating = styled.span`
  position: absolute;
  bottom: 10px;
  right: 5px;
  opacity: 0;
`;

const ImageBlock = styled.div`
  margin-bottom: 5px;
  position: relative;
  &:hover {
    ${Image} {
      opacity: 0.3;
    }
    ${Rating} {
      opacity: 1;
    }
  }
  transition: opacity 0.1s linear;
`;

const Title = styled.span`
  display: block;
  margin-bottom: 3px;
`;

const Year = styled.span``;

const Poster = ({ id, imageUrl, title, rating, year, isMovie }) => (
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
        <Rating>
          <span role="img" aria-label="Rating">
            ⭐️
          </span>{" "}
          {rating}/10
        </Rating>
      </ImageBlock>
      <Title>{title}</Title>
      <Year>{year}</Year>
    </PosterBlock>
  </Link>
);

export default Poster;
