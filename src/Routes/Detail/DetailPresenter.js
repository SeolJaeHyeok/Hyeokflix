import React from "react";
import { withRouter, Link, Switch, Route } from "react-router-dom";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";
import Loader from "Components/Loader";
import Helmet from "react-helmet";
import Message from "Components/Message";
import Casting from "Components/Casting";
import Crews from "Components/Crew";
import Company from "Components/Company";
import Country from "Components/Country";
import Video from "Components/Video";

const Container = styled.div`
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
  animation-duration: 3s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
  z-index: -1;
`;

const Content = styled.div`
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
  animation-duration: 3s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
`;

const Data = styled.div`
  width: 70%;
  margin-left: 10px;
  animation-name: ${showAnim};
  animation-duration: 3s;
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
  font-size: 20px;
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
  bottom: 10px;
  justify-content: center;
`;

const Tab = styled(Link)`
  border: 2px solid #e74c3c;
  color: ${(props) => (props.current === "true" ? "white" : "#e74c3c")};
  background-color: ${(props) =>
    props.current === "true" ? "#e74c3c" : "transparent"};
  width: 120px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  margin-top: 50px;
  :not(:last-child) {
    margin-right: 20px;
  }

  transition: 0.3s ease-in-out;

  &:hover {
    color: white;
    background-color: #e74c3c;
  }

  &:first-child {
    border-radius: 10px;
    border-left: 2px solid #e74c3c;
  }

  &:last-child {
    border-radius: 10px;
    border-right: 2px solid #e74c3c;
  }
`;

const DetailPresenter = ({
  location,
  match,
  result,
  loading,
  error,
  credit,
}) => {
  return loading ? (
    <>
      <Helmet>
        <title>Loading | Hyeokflix</title>
      </Helmet>
      <Loader />
    </>
  ) : error ? (
    <Message color="#e743c3" text={error}></Message>
  ) : (
    <Container>
      <Helmet>
        <title>
          {result.original_title ? result.original_title : result.original_name}{" "}
          | Hyeokflix
        </title>
      </Helmet>
      <Backdrop
        bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
      />
      <Content>
        <Cover
          bgImage={
            result.poster_path
              ? `https://image.tmdb.org/t/p/original${result.poster_path}`
              : require("../../assets/noPosterSmall.png")
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
            current={location.pathname.includes("/video").toString()}
            to={match.url + "/video"}
          >
            Trailer
          </Tab>

          <Tab
            current={location.pathname.includes("/information").toString()}
            to={match.url + "/information"}
          >
            More
          </Tab>
        </TabContainer>
      </Content>

      <Switch>
        <Route path={`/movie/:id/video`} exact>
          {result.videos.results.map((vid) => (
            <Video key={vid.key} videoKey={vid.key} />
          ))}
        </Route>
        <Route path={`/show/:id/video`} exact>
          {result.videos.results.map((vid) => (
            <Video key={vid.key} videoKey={vid.key} />
          ))}
        </Route>
      </Switch>
      <Switch>
        <Route path={`/movie/:id/information`} exact>
          {credit.cast && credit.cast.length > 0 && (
            <Casting casts={credit.cast} />
          )}
          {result.original_name && credit.crew && credit.crew.length > 0 && (
            <Crews crews={credit.crew} />
          )}
          {result.production_companies &&
            result.production_companies.length > 0 && (
              <Company companies={result.production_companies} />
            )}
          {result.production_countries &&
            result.production_countries.length > 0 && (
              <Country countries={result.production_countries} />
            )}
        </Route>
      </Switch>
    </Container>
  );
};

DetailPresenter.propTypes = {
  result: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  credit: PropTypes.object,
  error: PropTypes.string,
};

export default withRouter(DetailPresenter);
