import React from "react";
import styled from "styled-components";

/*
result.production_companies
 */

const Header = styled.div`
  margin-top: 50px;
  font-size: 24px;
  color: white;
`;

const CompaniesBlock = styled.div`
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

  @keyframes rotateImage {
    0% {
      transform: rotate(0) translateY(0) scale(1);
    }
    10% {
      transform: rotate(0) translateY(0) scale(1);
    }
    33% {
      transform: rotate(-3deg) translateY(-2%) scale(1.03);
    }

    66% {
      transform: rotate(3deg) translateY(-2%) scale(1.03);
    }
    90% {
      transform: rotate(0) translateY(0) scale(1);
    }
    100% {
      transform: rotate(0) translateY(0) scale(1);
    }
  }
  &:hover {
    ${Name} {
      opacity: 1;
    }
    transform: scale(1.1, 1.1);
    animation: rotateImage 1s linear infinite;
  }
`;

const Company = ({ company }) => {
  return (
    <>
      {company && (
        <>
          <Header>Production Company</Header>
          <CompaniesBlock>
            {company.map((com) => (
              <CompaniesItem
                key={com.id}
                bgUrl={
                  com.logo_path
                    ? `https://image.tmdb.org/t/p/w300${com.logo_path}`
                    : "https://kknd26.ru/images/no-photo-nevinka.png"
                }
              >
                <Name>{com.name}</Name>
              </CompaniesItem>
            ))}
          </CompaniesBlock>
        </>
      )}
    </>
  );
};

export default Company;
