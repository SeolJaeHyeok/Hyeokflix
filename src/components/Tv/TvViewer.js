import React from "react";
import styled from "styled-components";

import Loader from "components/common/Loader";
import Section from "components/common/Section";

const TvViewerBlock = styled.div``;

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
        <Section title="Trending">{trending.map((tv) => tv.name)}</Section>
      )}
      {topRated && topRated.length > 0 && (
        <Section title="Top Rated">{topRated.map((tv) => tv.name)}</Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="Popular">{popular.map((tv) => tv.name)}</Section>
      )}
      {airingToday && airingToday.length > 0 && (
        <Section title="Airing Today">
          {airingToday.map((tv) => tv.name)}
        </Section>
      )}
    </TvViewerBlock>
  );

export default TvViewer;
