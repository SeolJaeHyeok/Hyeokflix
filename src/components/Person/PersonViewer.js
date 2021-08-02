import Loader from "components/common/Loader";
import React from "react";
import styled, { keyframes } from "styled-components";

const PersonViewerBlock = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 50px;
`;

const Backdrop = styled.div``;

const Content = styled.div`
  font-family: serif;
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const showAnim = keyframes`
0% {
    opacity: 0;
}
50% {
    opacity: 0;
}
100% {
    opacity: 1;
}
`;

const Cover = styled.div`
  width: 30%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  height: 100%;
  border-radius: 5px;
  animation-name: ${showAnim};
  animation-duration: 1.5s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
`;

const Data = styled.div`
  width: 70%;
  margin-left: 20px;
  animation-name: ${showAnim};
  animation-duration: 1.8s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
`;

const Name = styled.span`
  font-size: 32px;
`;

const Department = styled.span`
  margin-left: 10px;
  font-size: 24px;
  color: #bdc3c7;
`;

const Birthday = styled.div`
  font-size: 14px;
  padding: 5px 0px;
  color: #bdc3c7;
`;

const PlaceOfBirth = styled.div`
  font-size: 14px;
  padding: 5px 0px;
  color: #bdc3c7;
`;

const BiographyTitle = styled.div`
  margin-top: 10px;
  font-size: 24px;
`;

const Biography = styled.div`
  font-size: 18px;
  padding: 5px 0px;
  color: #bdc3c7;
`;

const PersonViewer = ({
  result,
  movieResults,
  showResults,
  error,
  loading,
}) => {
  return loading ? (
    <Loader />
  ) : (
    <PersonViewerBlock>
      <Content>
        <Cover
          bgImage={
            result.profile_path
              ? `https://image.tmdb.org/t/p/original${result.profile_path}`
              : "https://kknd26.ru/images/no-photo-nevinka.png"
          }
        />
        <Data>
          <Name>{result.name}</Name>
          <Department>{result.known_for_department}</Department>
          <Birthday>{result.birthday}</Birthday>
          <PlaceOfBirth>{result.place_of_birth}</PlaceOfBirth>
          <BiographyTitle>Biography</BiographyTitle>
          <Biography>{result.biography}</Biography>
        </Data>
      </Content>
    </PersonViewerBlock>
  );
};

export default PersonViewer;
