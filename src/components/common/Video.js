import React from "react";
import styled from "styled-components";
import Youtube from "react-youtube";

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
  return (
    <VideoBlock>
      <Youtube videoId={videos.key} key={videos.id} opts={opts} />
    </VideoBlock>
  );
};

export default Video;
