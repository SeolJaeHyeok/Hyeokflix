import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Header = styled.div`
  margin-top: 50px;
  font-size: 24px;
  color: white;
`;

const CompaniesContainer = styled.div`
  width: 100%;
  margin: 30px auto;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, 120px);
  grid-auto-rows: 200px;
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

const CompaniesItem = styled.div`
  background: ${(props) => `url(${props.bgUrl})`};
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;

  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  color: white;

  &:hover {
    ${Name} {
      opacity: 1;
    }
  }
`;

const Company = ({ companies }) => {
  return (
    <>
      {companies && (
        <>
          <Header>Production Company</Header>
          <CompaniesContainer>
            {companies.map((com) => (
              <CompaniesItem
                key={com.id}
                bgUrl={
                  com.logo_path
                    ? `https://image.tmdb.org/t/p/w300${com.logo_path}`
                    : "../noImage.png"
                }
              >
                <Name>{com.name}</Name>
              </CompaniesItem>
            ))}
          </CompaniesContainer>
        </>
      )}
    </>
  );
};

Company.propTypes = {
  companies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      logo_path: PropTypes.string,
      name: PropTypes.string,
      origin_country: PropTypes.string,
    })
  ),
};

export default Company;
