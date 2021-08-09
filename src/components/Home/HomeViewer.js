import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { Helmet } from "react-helmet";

import Loader from "components/common/Loader";
import Message from "components/common/Message";
import Poster from "components/common/Poster";
import Background from "./Background";

const TrendingTitle = styled.div`
  font-size: 16px;
  padding-bottom: 16px;
  text-align: center;
`;

const SliderContainer = styled.div`
  margin-top: 910px;
  padding: 20px;
`;

const HomeViewer = ({ trending, error, loading }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 10,
  };
  return (
    <>
      <Helmet>
        <title>Home | Hyeokflix</title>
      </Helmet>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Background {...trending} />
          <SliderContainer>
            <TrendingTitle>지난주 인기 컨텐츠</TrendingTitle>
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
                    trend.release_date
                      ? trend.release_date
                      : trend.first_air_date
                  }
                  isMovie={trend.original_title ? true : false}
                />
              ))}
            </Slider>
          </SliderContainer>
          {error && <Message color="#e74c3c" text={error} />}
        </>
      )}
    </>
  );
};

export default HomeViewer;
