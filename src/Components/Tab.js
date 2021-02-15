import React from "react";
import styled from "styled-components";

const TabContainer = styled.div`
  width: 100%;
  font-size: 30px;
  text-align: center;
`;
const TrailerTab = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 30px;
`;

const ProductionInformationTab = styled.span`
  position: absolute;
  top: 40px;
  right: 10px;
  font-size: 30px;
`;

const Tab = () => {
  return (
    <TabContainer>
      {/* 오른쪽 위에 탭을 누르면 화면 가운데에 정보가 나타나도록 해보자*/}
      <TrailerTab>Trailer</TrailerTab>
      <ProductionInformationTab>Production</ProductionInformationTab>
    </TabContainer>
  );
};

export default Tab;
