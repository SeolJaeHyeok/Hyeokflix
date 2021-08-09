import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  padding-top: 200px;
`;

const Text = styled.span`
  color: ${(props) => props.color};
  font-size: 16px;
`;

const Message = ({ text, color }) => (
  <Container>
    <Text color={color}>{text}</Text>
  </Container>
);

export default Message;
