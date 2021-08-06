import React from "react";
import styled from "styled-components";

const SectionBlock = styled.div`
  :not(:last-child) {
    margin-bottom: 50px;
  }
  /* text-align: center; */
  margin-top: 20px;
  margin-left: 25px;
`;

const Title = styled.span`
  font-size: 24px;
  font-weight: 600;
`;

const Grid = styled.div`
  margin-top: 25px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 125px);
  grid-gap: 20px;
`;

const Section = ({ title, children }) => (
  <SectionBlock>
    <Title>{title}</Title>
    <Grid>{children}</Grid>
  </SectionBlock>
);

export default Section;
