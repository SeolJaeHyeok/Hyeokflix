import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  font-size: 32px;
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

const LoadingImg = styled.img`
  width: 100%;
  height: calc(100% - 120px);
  background-size: cover;
  background-position: center center;
`;

export default () => (
  <Container>
    <LoadingImg
      src="https://media1.giphy.com/media/3ohzdOrcdpiD26TPt6/giphy.gif?cid=ecf05e47crfi61b0bexys7bsu9ekn5uf7h79u4yfp8wmsjr1&rid=giphy.gif"
      alt="Waiting"
    ></LoadingImg>
  </Container>
);
