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
      src="https://media0.giphy.com/media/CH8pZqw2t0G7m/giphy.gif?cid=ecf05e47yrvub7qyb455isy74w3pzgv1ukdhafcp8kejgv3i&rid=giphy.gif"
      alt="Waiting"
    ></LoadingImg>
  </Container>
);
