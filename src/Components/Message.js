import React from "react";
import PropType from "prop-types";
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

Message.propTypes = {
  text: PropType.string.isRequired,
};

export default Message;
