import React from "react";
import Proptypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
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

const ImageContainer = styled.div`
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

const Poster = ({ id, imageUrl, title, rating, year, isMovie = false }) => (
  <Link to={isMovie ? `/movie/${id}` : `/tv/${id}`}>
    <Container>
      <ImageContainer>
        <Image
          bgUrl={
            imageUrl
              ? `https://image.tmdb.org/t/p/w300${imageUrl}`
              : "../noImage.png"
          }
        />
        <Rating>
          <span role="img" aria-label="rating">
            ⭐️
          </span>{" "}
          {rating} / 10
        </Rating>
      </ImageContainer>
      <Title>
        {title.length > 15 ? `${title.substring(0, 18)}...` : title}
      </Title>
      <Year>{year}</Year>
    </Container>
  </Link>
);

Poster.propTypes = {
  id: Proptypes.number.isRequired,
  imageUrl: Proptypes.string,
  title: Proptypes.string.isRequired,
  rating: Proptypes.number,
  year: Proptypes.string,
  isMovie: Proptypes.bool,
};

export default Poster;
