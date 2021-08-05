import React from "react";
import { Link, Route, Switch, withRouter } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import Slider from "react-slick";
import { withBaseIcon } from "react-icons-kit";
import { link } from "react-icons-kit/icomoon/link";

import Loader from "components/common/Loader";
import Casting from "components/common/Casting";
import Country from "components/common/Country";
import Company from "components/common/Company";
import Message from "components/common/Message";
import Video from "components/common/Video";
import Poster from "components/common/Poster";
import Section from "components/common/Section";

const IconBlock = withBaseIcon({ size: 20, style: { color: "Yellow" } });

const DetailViewerBlock = styled.div`
  height: calc(100vh - 20px);
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

const ReleaseDate = styled.div`
  font-size: 18px;
  margin-top: 5px;
`;

const Runtime = styled.div`
  font-size: 18px;
  margin-top: 5px;
`;

const GenreContainer = styled.div`
  margin-top: 0.1rem;
  margin-bottom: 0.8rem;
  display: flex;
`;

const Genre = styled.div`
  width: fit-content;
  padding: 5px 10px;
  background: #7f8c8d;
  color: white;
  margin-right: 10px;
  border-radius: 3px;
`;

const Rating = styled.div`
  font-size: 18px;
  margin: 5px 0px;
`;

const OverviewContainer = styled.div`
  font-size: 22px;
  margin-top: 1.125rem;
`;

const Overview = styled.p`
  font-size: 16px;
  line-height: 1.5;
  width: 70%;
  opacity: 0.7;
  margin-top: 0.2rem;
`;

const IMDBBlock = styled.span`
  margin-left: 10px;
`;

const IMDB = styled.a`
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

const SectionBlock = styled.div`
  margin-top: 50px;
`;

const DetailViewer = ({ result, error, loading, match, location }) => {
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
            <IMDBBlock>
              {result.imdb_id ? (
                <IMDB href={`https://www.imdb.com/title/${result.imdb_id}`}>
                  <IconBlock icon={link} />
                </IMDB>
              ) : null}
            </IMDBBlock>
          </Title>
          <GenreContainer>
            {result.genres &&
              result.genres.map((genre) => <Genre>{genre.name}</Genre>)}
          </GenreContainer>
          <ReleaseDate>
            Date -{" "}
            {result.release_date
              ? result.release_date.substring(0, 4)
              : result.first_air_date.substring(0, 4)}
          </ReleaseDate>
          <Runtime>
            Runtime -{" "}
            {result.runtime ? result.runtime : result.episode_run_time}
            min
          </Runtime>
          <Rating>Rating - {result.vote_average}/10</Rating>
          <OverviewContainer>
            Overview
            <Overview>{result.overview}</Overview>
          </OverviewContainer>
        </Data>
        <TabContainer>
          <Tab
            current={location.pathname.includes("/similar").toString()}
            to={match.url + "/similar"}
          >
            Similar
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
          <SectionBlock>
            <Section title={`${result.original_title}와 비슷한 영화`}>
              {result.similar.results.slice(0, 18).map((movie) => (
                <Poster
                  key={movie.id}
                  id={movie.id}
                  imageUrl={movie.poster_path}
                  title={movie.original_title}
                  year={
                    movie.release_date && movie.release_date.substring(0, 4)
                  }
                  isMovie={true}
                />
              ))}
            </Section>
          </SectionBlock>
        </Route>
        <Route path={`/tv/:id/similar`} exact>
          <SectionBlock>
            <Section title={`${result.original_name}와 비슷한 영화`}>
              {result.similar.results.slice(0, 18).map((show) => (
                <Poster
                  key={show.id}
                  id={show.id}
                  imageUrl={show.poster_path}
                  title={show.original_title}
                  year={show.release_date && show.release_date.substring(0, 4)}
                  isMovie={false}
                />
              ))}
            </Section>
          </SectionBlock>
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
