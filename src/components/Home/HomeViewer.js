import React from "react";
import Slider from "react-slick";
import styled from "styled-components";

import PosterSlider from "components/common/PosterSlider";
import Loader from "components/common/Loader";
import Message from "components/common/Message";
import Poster from "components/common/Poster";

const HomeViewerBlock = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  height: 100%;
  position: relative;
  padding: 0px;
`;

const Content = styled.div``;

const TrendingTitle = styled.div`
  font-size: 24px;
  text-align: center;
  margin-top: 1.125rem;
`;

const SliderContainer = styled.div`
  padding: 30px;
  margin-bottom: 1.125rem;
`;

const HomeViewer = ({ nowPlaying, trending, error, loading }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 10,
    adaptiveHeight: true,
  };
  return loading ? (
    <Loader />
  ) : (
    <HomeViewerBlock>
      <Content>
        {nowPlaying && nowPlaying.length > 0 && (
          <PosterSlider nowPlaying={nowPlaying} isMovie={true} />
        )}
        <TrendingTitle>{"지난주 인기 컨텐츠"}</TrendingTitle>
        <SliderContainer>
          <Slider {...settings}>
            {trending.map((trend) => (
              <Poster
                key={trend.id}
                id={trend.id}
                imageUrl={trend.poster_path}
                title={
                  trend.original_title
                    ? trend.original_title
                    : trend.original_name
                }
                year={
                  trend.release_date ? trend.release_date : trend.first_air_date
                }
                isMovie={trend.original_title ? true : false}
              />
            ))}
          </Slider>
        </SliderContainer>
        {error && <Message color="#e74c3c" text={error} />}
      </Content>
    </HomeViewerBlock>
  );
};

export default HomeViewer;
