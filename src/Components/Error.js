import React from "react";
import PropType from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const Text = styled.span`
  color: #e74c3c;
`;

const Error = ({ text }) => (
  <Container>
    <Text>{text}</Text>
  </Container>
);

Error.propTypes = {
  text: PropType.string.isRequired,
};

export default Error;
