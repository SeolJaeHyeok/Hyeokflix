import React from "react";
import styled from "styled-components";

// 추후에 다르게 스타일링 고고

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  font-size: 32px;
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

export default () => (
  <Container>
    <span aria-label="Loading" role="img">
      ⏰
    </span>
  </Container>
);
