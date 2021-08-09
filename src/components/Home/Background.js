import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import YouTube from "react-youtube";
import { movieApi, tvApi } from "lib/api";
import { Link } from "react-router-dom";
import { HiVolumeUp, HiVolumeOff } from "react-icons/hi";
import { FaPause, FaPlayCircle } from "react-icons/fa";
import "./background.css";

const SLink = styled(Link)`
  padding: 10px 20px;
  width: fit-content;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
  background: white;
  color: black;
  font-size: 20px;
`;

const Button = styled.button`
  margin: 1.3rem;
  border-style: none;
  border-bottom: 2px solid;
  color: white;
  transform: scale(1.5);
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.1);
`;

const Background = (trending) => {
  const random = Math.floor(Math.random() * 20);

  const [data, setData] = useState("");
  const [Play, setPlay] = useState(false);
  const [Mute, setMute] = useState(true);

  const playerRef = useRef(null);

  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 1,
      mute: 1,
      loop: 1,
      playlist: data?.videos?.results[0]?.key,
    },
  };

  const pauseVideo = () => {
    playerRef?.current?.internalPlayer.pauseVideo();
    setPlay(true);
  };

  const startVideo = () => {
    playerRef?.current?.internalPlayer.playVideo();
    setPlay(false);
  };

  const unmuteVideo = () => {
    playerRef?.current?.internalPlayer.unMute();
    setMute(false);
  };

  const muteVideo = () => {
    playerRef?.current?.internalPlayer.mute();
    setMute(true);
  };
  const getVideoFromApi = async () => {
    let id = trending[random].id;
    let isMovie = trending[random].media_type === "movie" ? true : false;
    const parsedId = parseInt(id);
    try {
      if (isMovie) {
        const { data: result } = await movieApi.movieDetail(parsedId);
        setData(result);
      } else {
        const { data: result } = await tvApi.showDetail(parsedId);
        setData(result);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getVideoFromApi();
  }, [trending]);

  return (
    <>
      <div class="video-background">
        <div class="video-foreground">
          <YouTube
            id="yt_id"
            videoId={data?.videos?.results[0]?.key}
            opts={opts}
            ref={playerRef}
          />
        </div>
      </div>
      <div id="vidtop-content">
        <div class="vid-info">
          <h1>{data && data.title ? data.title : data.name}</h1>
          <p>{data && data.overview}</p>
          {data.original_title ? (
            <SLink to={`/movie/${data.id}`}> 더 알아보기</SLink>
          ) : (
            <SLink to={`/show/${data.id}`}> 더 알아보기</SLink>
          )}
        </div>
        <div class="vid-control">
          {Play ? (
            <Button onClick={startVideo}>
              <FaPlayCircle />
            </Button>
          ) : (
            <Button onClick={pauseVideo}>
              <FaPause />
            </Button>
          )}
          {Mute ? (
            <Button onClick={unmuteVideo}>
              <HiVolumeOff />
            </Button>
          ) : (
            <Button onClick={muteVideo}>
              <HiVolumeUp />
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default Background;
