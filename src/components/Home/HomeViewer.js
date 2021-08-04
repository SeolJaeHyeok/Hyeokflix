import Loader from "components/common/Loader";
import Message from "components/common/Message";
import Poster from "components/common/Poster";
import Section from "components/common/Section";
import React from "react";
import Slider from "react-slick";
import styled from "styled-components";

const HomeViewerBlock = styled.div``;

const Content = styled.div``;

const HomeViewer = ({ nowPlaying, trending, error, loading }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 8,
  };
  return loading ? (
    <Loader />
  ) : (
    <HomeViewerBlock>
      <Section>
        {nowPlaying.map((now) => (
          <Poster
            id={now.id}
            imageUrl={now.poster_path}
            title={now.original_title ? now.original_title : now.original_name}
            year={now.release_date ? now.release_date : now.first_air_date}
            isMovie={now.original_title ? true : false}
          />
        ))}
      </Section>
      <Section title="지난주 인기 컨텐츠">
        {trending.map((trend) => (
          <Poster
            key={trend.id}
            id={trend.id}
            imageUrl={trend.poster_path}
            title={
              trend.original_title ? trend.original_title : trend.original_name
            }
            year={
              trend.release_date ? trend.release_date : trend.first_air_date
            }
            isMovie={trend.original_title ? true : false}
          />
        ))}
      </Section>

      {error && <Message color="#e74c3c" text={error} />}
    </HomeViewerBlock>
  );
};

export default HomeViewer;
