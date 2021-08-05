import React from "react";
import styled from "styled-components";

const Header = styled.div`
  margin-top: 50px;
  font-size: 24px;
  color: white;
`;

const CountriesContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 100px;
  width: 100%;
  display: flex;
`;

const CountriesItem = styled.div`
  width: fit-content;
  padding: 5px 10px;
  background: #e74c3c;
  color: white;
  margin-right: 10px;
  margin-bottom: 100px;
`;

const Country = ({ countries }) => {
  return (
    <>
      {countries && (
        <>
          <Header>Production Country</Header>
          <CountriesContainer>
            {countries.map((coun) => (
              <CountriesItem key={coun.iso_3166_1}>{coun.name}</CountriesItem>
            ))}
          </CountriesContainer>
        </>
      )}
    </>
  );
};

export default Country;
