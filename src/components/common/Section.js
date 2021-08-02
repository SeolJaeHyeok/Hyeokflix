import React from "react";
import styled from "styled-components";

const SectionBlock = styled.div`
  :not(:last-child) {
    margin-bottom: 50px;
  }
  text-align: center;
`;

const Title = styled.span`
  font-size: 20px;
  font-weight: 600;
`;

const Grid = styled.div`
  margin-top: 25px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 125px);
  grid-gap: 25px;
`;

const Section = ({ title, children }) => (
  <SectionBlock>
    <Title>{title}</Title>
    <Grid>{children}</Grid>
  </SectionBlock>
);

export default Section;
