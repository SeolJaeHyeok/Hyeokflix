import TvViewer from "components/Tv/TvViewer";
import { trendingApi, tvApi } from "lib/api";
import React, { useState } from "react";

const TvContainer = () => {
  const [topRated, setTopRated] = useState(null);
  const [popular, setPopular] = useState(null);
  const [airingToday, setAiringToday] = useState(null);
  const [trending, setTrending] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const getTvFromApi = async () => {
    try {
      const {
        data: { results: topRated },
      } = await tvApi.topRated();
      const {
        data: { results: popular },
      } = await tvApi.popular();
      const {
        data: { results: airingToday },
      } = await tvApi.airingToday();
      const {
        data: { results: trending },
      } = await trendingApi.trending("tv");

      setTopRated(topRated);
      setPopular(popular);
      setAiringToday(airingToday);
      setTrending(trending);
    } catch (e) {
      setError("TV 정보를 찾을 수 없습니다.");
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useState(() => {
    getTvFromApi();
  }, []);

  return (
    <TvViewer
      topRated={topRated}
      popular={popular}
      airingToday={airingToday}
      trending={trending}
      error={error}
      loading={loading}
    />
  );
};

export default TvContainer;
