import React from "react";
import styled from "styled-components";

import Loader from "components/common/Loader";
import Section from "components/common/Section";
import Message from "components/common/Message";
import Poster from "components/common/Poster";
import PosterSlider from "components/common/PosterSlider";

const TvViewerBlock = styled.div`
  padding: 0px;
`;

const TvViewer = ({
  topRated,
  airingToday,
  popular,
  trending,
  error,
  loading,
}) =>
  loading ? (
    <Loader />
  ) : (
    <TvViewerBlock>
      {trending && trending.length > 0 && (
        <PosterSlider nowPlaying={trending} isMovie={true} />
      )}
      {trending && trending.length > 0 && (
        <Section title="Trending Series">
          {trending.slice(0, 18).map((tv) => (
            <Poster
              key={tv.id}
              id={tv.id}
              imageUrl={tv.poster_path}
              title={tv.original_name}
              year={tv.first_air_date && tv.first_air_date.substring(0, 4)}
              isMovie={false}
            />
          ))}
        </Section>
      )}
      {topRated && topRated.length > 0 && (
        <Section title="Top Rated Series">
          {topRated.slice(0, 18).map((tv) => (
            <Poster
              key={tv.id}
              id={tv.id}
              imageUrl={tv.poster_path}
              title={tv.original_name}
              year={tv.first_air_date && tv.first_air_date.substring(0, 4)}
              isMovie={false}
            />
          ))}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="Popular Series">
          {popular.slice(0, 18).map((tv) => (
            <Poster
              key={tv.id}
              id={tv.id}
              imageUrl={tv.poster_path}
              title={tv.original_name}
              year={tv.first_air_date && tv.first_air_date.substring(0, 4)}
              isMovie={false}
            />
          ))}
        </Section>
      )}
      {airingToday && airingToday.length > 0 && (
        <Section title="Airing Today Series">
          {airingToday.slice(0, 18).map((tv) => (
            <Poster
              key={tv.id}
              id={tv.id}
              imageUrl={tv.poster_path}
              title={tv.original_name}
              year={tv.first_air_date && tv.first_air_date.substring(0, 4)}
              isMovie={false}
            />
          ))}
        </Section>
      )}
      {error && <Message color="#e74c3c" text={error} />}
    </TvViewerBlock>
  );

export default TvViewer;
