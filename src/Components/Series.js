import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Header = styled.div`
  font-size: 24px;
  margin-top: 50px;
`;

const SeriesContainer = styled.div`
  width: 100%;
  margin: 50px auto;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, 180px);
  grid-auto-rows: 260px;
`;

const Name = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);

  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 10px;

  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.7);
  opacity: 0;
  transition: 0.3s ease-in-out;
`;

const SeriesItem = styled.div`
  background: ${(props) => `url(${props.bgUrl})`};
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;
  border-radius: 5px;

  &:hover {
    ${Name} {
      opacity: 1;
    }
  }
`;

const Series = ({ series }) => {
  return (
    <>
      <Header>Seasons</Header>
      <SeriesContainer>
        {series.map((s) => (
          <SeriesItem
            key={s.id}
            bgUrl={
              s.poster_path
                ? `https://image.tmdb.org/t/p/w300${s.poster_path}`
                : "https://kknd26.ru/images/no-photo-nevinka.png"
            }
          >
            <Name>{s.name}</Name>
          </SeriesItem>
        ))}
      </SeriesContainer>
    </>
  );
};

Series.propTypes = {
  series: PropTypes.arrayOf(
    PropTypes.shape({
      air_date: PropTypes.string,
      episode_count: PropTypes.number,
      id: PropTypes.number,
      name: PropTypes.string,
      overview: PropTypes.string,
      poster_path: PropTypes.string,
      season_number: PropTypes.number,
    })
  ),
};

export default Series;
