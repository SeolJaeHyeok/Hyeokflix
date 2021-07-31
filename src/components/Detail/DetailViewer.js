import React from "react";
import { Link, Route, Switch, withRouter } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import Slider from "react-slick";

import Loader from "components/common/Loader";
import Casting from "components/common/Casting";
import Country from "components/common/Country";
import Company from "components/common/Company";
import Message from "components/common/Message";
import Video from "components/common/Video";
import Poster from "components/common/Poster";

const DetailViewerBlock = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 50px;
`;

const backdropAnim = keyframes`
    0% {
        opacity: 1;
        filter: none;
    }
    60% {
        opacity: 1;
        filter: none;
    }
    100% {
        opacity: 0.5;
        filter: blur(10px);
    }
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
  animation-name: ${backdropAnim};
  animation-duration: 2s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
  z-index: -1;
`;

const Content = styled.div`
  font-family: serif;
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const showAnim = keyframes`
0% {
    opacity: 0;
}
70% {
    opacity: 0;
}
100% {
    opacity: 1;
}
`;

const Cover = styled.div`
  width: 30%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  height: 100%;
  border-radius: 5px;
  animation-name: ${showAnim};
  animation-duration: 2.2s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
`;

const Data = styled.div`
  width: 70%;
  margin-left: 10px;
  animation-name: ${showAnim};
  animation-duration: 2.5s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
`;

const Title = styled.h3`
  font-size: 32px;
`;

const MovieInfoContainer = styled.div`
  margin: 40px 0px;
  display: flex;
  justify-content: start;
  align-content: center;
`;

const MovieInfomation = styled.span`
  font-size: 16px;
`;

const Divider = styled.span`
  margin: 0 10px;
`;

const Overview = styled.p`
  font-size: 16px;
  line-height: 1.5;
  width: 70%;
  opacity: 0.7;
`;

const IMDB = styled.a`
  margin-left: 10px;
  width: 40px;
  height: 25px;
`;

const IMDBImg = styled.img`
  margin: 0;
  width: 40px;
  height: 20px;
`;

const TabContainer = styled.div`
  width: 100%;
  display: flex;
  position: absolute;
  bottom: 0px;
  left: 30px;
  justify-content: center;
`;

const Tab = styled(Link)`
  border: 2px solid #e74c3c;
  color: ${(props) => (props.current === "true" ? "white" : "#e74c3c")};
  background-color: ${(props) =>
    props.current === "true" ? "#e74c3c" : "transparent"};
  width: 130px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  margin-top: 50px;
  border-radius: 10px;
  border-left: 2px solid #e74c3c;
  transition: 0.3s ease-in-out;
  :not(:last-child) {
    margin-right: 20px;
  }
  &:hover {
    color: white;
    background-color: #e74c3c;
  }
`;

const SliderBlock = styled.div`
  margin-top: 30px;
`;

const PosterBlock = styled.div`
  margin-bottom: 30px;
`;

const DetailViewer = ({ result, error, loading, match, location }) => {
  const similarSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  const videoSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return loading ? (
    <Loader />
  ) : (
    <DetailViewerBlock>
      <Backdrop
        bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
      />
      <Content>
        <Cover
          bgImage={
            result.poster_path
              ? `https://image.tmdb.org/t/p/original${result.poster_path}`
              : "https://kknd26.ru/images/no-photo-nevinka.png"
          }
        />
        <Data>
          <Title>
            {result.original_title
              ? result.original_title
              : result.original_name}
          </Title>
          <MovieInfoContainer>
            <MovieInfomation>
              {result.release_date
                ? result.release_date.substring(0, 4)
                : result.first_air_date.substring(0, 4)}
            </MovieInfomation>
            <Divider>•</Divider>
            <MovieInfomation>
              {result.runtime ? result.runtime : result.episode_run_time}min
            </MovieInfomation>
            <Divider>•</Divider>
            <MovieInfomation>
              {result.genres &&
                result.genres.map((genre, index) =>
                  index === result.genres.length - 1
                    ? genre.name
                    : `${genre.name}/`
                )}
            </MovieInfomation>
            {result.imdb_id ? (
              <IMDB href={`https://www.imdb.com/title/${result.imdb_id}`}>
                <IMDBImg src="https://www.fixinthemix.com/wp-content/uploads/2015/08/IMDb.png"></IMDBImg>
              </IMDB>
            ) : null}
          </MovieInfoContainer>
          <Overview>{result.overview}</Overview>
        </Data>
        <TabContainer>
          <Tab
            current={location.pathname.includes("/similar").toString()}
            to={match.url + "/similar"}
          >
            Similar Content
          </Tab>
          <Tab
            current={location.pathname.includes("/video").toString()}
            to={match.url + "/video"}
          >
            Trailer
          </Tab>
          <Tab
            current={location.pathname.includes("/information").toString()}
            to={match.url + "/information"}
          >
            Credits
          </Tab>
          {result.original_name && (
            <Tab
              current={location.pathname.includes("/series").toString()}
              to={match.url + "/series"}
            >
              Series
            </Tab>
          )}
        </TabContainer>
      </Content>
      <Switch>
        <Route path={`/movie/:id/similar`} exact>
          <SliderBlock>
            <Slider {...similarSettings}>
              {result.similar.results.map((movie) => (
                <PosterBlock>
                  <Poster
                    key={movie.id}
                    id={movie.id}
                    imageUrl={movie.poster_path}
                    title={movie.original_title}
                    rating={movie.vote_average}
                    year={
                      movie.release_date && movie.release_date.substring(0, 4)
                    }
                    isMovie={true}
                  />
                </PosterBlock>
              ))}
            </Slider>
          </SliderBlock>
        </Route>
        <Route path={`/tv/:id/similar`} exact>
          <SliderBlock>
            <Slider {...similarSettings}>
              {result.similar.results.map((show) => (
                <PosterBlock>
                  <Poster
                    key={show.id}
                    id={show.id}
                    imageUrl={show.poster_path}
                    title={show.original_title}
                    rating={show.vote_average}
                    year={
                      show.release_date && show.release_date.substring(0, 4)
                    }
                    isMovie={false}
                  />
                </PosterBlock>
              ))}
            </Slider>
          </SliderBlock>
        </Route>
        <Route path={`/movie/:id/video`} exact>
          <Slider {...videoSettings}>
            {result.videos.results.map((videos) => (
              <Video videos={videos} key={videos.key} />
            ))}
          </Slider>
        </Route>
        <Route path={`/tv/:id/video`} exact>
          <Slider {...videoSettings}>
            {result.videos.results.map((videos) => (
              <Video videoKey={videos} key={videos.key} />
            ))}
          </Slider>
        </Route>
        <Route path={`/movie/:id/information`} exact>
          {result.credits.cast && result.credits.cast.length > 0 && (
            <Casting casts={result.credits.cast} />
          )}
          {result.production_companies &&
            result.production_companies.length > 0 && (
              <Company company={result.production_companies} />
            )}
          {result.production_countries &&
            result.production_countries.length > 0 && (
              <Country countries={result.production_countries} />
            )}
        </Route>
        <Route path={`/tv/:id/information`} exact>
          {result.credits.cast && result.credits.length > 0 && (
            <Casting casts={result.credits.cast} />
          )}
          {result.production_companies &&
            result.production_companies.length > 0 && (
              <Company company={result.production_companies} />
            )}
          {result.production_countries &&
            result.production_countries.length > 0 && (
              <Country countries={result.production_countries} />
            )}
        </Route>
      </Switch>
      {error && <Message color="#e74c3c" text={error} />}
    </DetailViewerBlock>
  );
};

export default withRouter(DetailViewer);
