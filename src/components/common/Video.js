import React from "react";
import styled from "styled-components";
import Youtube from "react-youtube";
import Message from "./Message";

const VideoBlock = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

const Video = ({ videos }) => {
  const opts = {
    height: "400",
    width: "600",
    playerVars: {
      autoplay: 0,
    },
  };
  return videos.length !== 0 ? (
    <VideoBlock>
      <Youtube videoId={videos.key} key={videos.id} opts={opts} />
    </VideoBlock>
  ) : (
    <Message text="관련 클립이 존재하지 않습니다." color="#95a5a6" />
  );
};

export default Video;
