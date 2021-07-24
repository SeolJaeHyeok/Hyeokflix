import React, { useEffect, useState } from "react";
import MovieViewer from "components/Movie/MovieViewer";
import { movieApi } from "lib/api";

const MovieContainer = () => {
  const [nowPlaying, setNowPlaying] = useState(null);
  const [upComing, setUpComing] = useState(null);
  const [popular, setPopular] = useState(null);
  const [trending, setTrending] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const getMovieFromApi = async () => {
    try {
      const {
        data: { results: nowPlaying },
      } = await movieApi.nowPlaying();
      const {
        data: { results: upComing },
      } = await movieApi.upcoming();
      const {
        data: { results: popular },
      } = await movieApi.popular();
      const {
        data: { results: trending },
      } = await movieApi.trending();

      setNowPlaying(nowPlaying);
      setUpComing(upComing);
      setPopular(popular);
      setTrending(trending);
    } catch (e) {
      setError("영화 정보를 찾을 수 없습니다.");
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovieFromApi();
  }, []);

  return (
    <MovieViewer
      nowPlaying={nowPlaying}
      upComing={upComing}
      popular={popular}
      trending={trending}
      error={error}
      loading={loading}
    />
  );
};

export default MovieContainer;
