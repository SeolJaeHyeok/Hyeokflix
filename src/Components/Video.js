import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Message from "Components/Message";

const VideoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 100px;
`;

const Video = ({ videoKey }) => {
  return videoKey && videoKey.length > 0 ? (
    <VideoContainer>
      <iframe
        title="trailer"
        src={`https://youtube.com/embed/${videoKey}`}
        width="100%"
        height="800px"
        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </VideoContainer>
  ) : (
    <Message text={"Related Video not found"} color="#e74c3c" />
  );
};

Video.propTypes = {
  videoKey: PropTypes.string.isRequired,
};

export default Video;
