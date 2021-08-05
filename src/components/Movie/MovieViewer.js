import React from "react";
import styled from "styled-components";

import Section from "components/common/Section";
import Loader from "components/common/Loader";
import Message from "components/common/Message";
import Poster from "components/common/Poster";
import PosterSlider from "components/common/PosterSlider";

const MovieViewerBlock = styled.div`
  padding: 0px;
`;

const MovieViewer = ({
  nowPlaying,
  upComing,
  popular,
  trending,
  error,
  loading,
}) =>
  loading ? (
    <Loader />
  ) : (
    <MovieViewerBlock>
      {nowPlaying && nowPlaying.length > 0 && (
        <PosterSlider nowPlaying={nowPlaying} isMovie={true} />
      )}
      {trending && trending.length > 0 && (
        <Section title="Trending Movies">
          {trending.slice(0, 18).map((movie) => (
            <Poster
              key={movie.id}
              id={movie.id}
              imageUrl={movie.poster_path}
              title={movie.original_title}
              year={movie.release_date && movie.release_date.substring(0, 4)}
              isMovie={true}
            />
          ))}
        </Section>
      )}
      {nowPlaying && nowPlaying.length > 0 && (
        <Section title="Now Playing Movies">
          {nowPlaying.slice(0, 18).map((movie) => (
            <Poster
              key={movie.id}
              id={movie.id}
              imageUrl={movie.poster_path}
              title={movie.original_title}
              year={movie.release_date && movie.release_date.substring(0, 4)}
              isMovie={true}
            />
          ))}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="Popular Movies">
          {popular.slice(0, 18).map((movie) => (
            <Poster
              key={movie.id}
              id={movie.id}
              imageUrl={movie.poster_path}
              title={movie.original_title}
              year={movie.release_date && movie.release_date.substring(0, 4)}
              isMovie={true}
            />
          ))}
        </Section>
      )}
      {upComing && upComing.length > 0 && (
        <Section title="Upcoming Movies">
          {upComing.slice(0, 18).map((movie) => (
            <Poster
              key={movie.id}
              id={movie.id}
              imageUrl={movie.poster_path}
              title={movie.original_title}
              year={movie.release_date && movie.release_date.substring(0, 4)}
              isMovie={true}
            />
          ))}
        </Section>
      )}
      {error && <Message color="#e74c3c" text={error} />}
    </MovieViewerBlock>
  );

export default MovieViewer;
