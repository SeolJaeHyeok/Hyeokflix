import React from "react";
import styled from "styled-components";

import Section from "components/common/Section";
import Loader from "components/common/Loader";
import Message from "components/common/Message";

const MovieViewerBlock = styled.div``;

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
      {trending && trending.length > 0 && (
        <Section title="Trending">
          {trending.map((movie) => movie.title)}
        </Section>
      )}
      {nowPlaying && nowPlaying.length > 0 && (
        <Section title="Now Playing">
          {nowPlaying.map((movie) => movie.title)}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="Popular">{popular.map((movie) => movie.title)}</Section>
      )}
      {upComing && upComing.length > 0 && (
        <Section title="Upcoming">
          {upComing.map((movie) => movie.title)}
        </Section>
      )}
      {error && <Message color="#e74c3c" text={error} />}
    </MovieViewerBlock>
  );

export default MovieViewer;
