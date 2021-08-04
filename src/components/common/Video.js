import React from "react";
import styled from "styled-components";
import Message from "./Message";

const VideoBlock = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

const Video = ({ videos }) => {
  // const opts = {
  //   height: "400",
  //   width: "600",
  //   playerVars: {
  //     autoplay: 0,
  //   },
  // };
  return videos.length !== 0 ? (
    <VideoBlock>
      {/* <Youtube videoId={videos.key} key={videos.id} opts={opts} /> 
      이 방식으로 유튜브 동영상 렌더링 시키니까 error 발생해가지고 원인 찾아보니 https://youtube.com 도메인을 추가해줘야 한다고 나오길래
      라이브러리로 동영상 삽입하지 않고 iframe으로 영상을 삽입하고 도메인을 추가해주니 동일한 에러가 해결됐다*/}
      <iframe
        src={`https://youtube.com/embed/${videos.key}`}
        width="600"
        height="400"
        allowFullScreen
      />
      ;
    </VideoBlock>
  ) : (
    <Message text="관련 클립이 존재하지 않습니다." color="#95a5a6" />
  );
};

export default Video;
