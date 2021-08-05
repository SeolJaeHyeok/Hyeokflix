import React, { useEffect, useState } from "react";
import HomeViewer from "components/Home/HomeViewer";
import { trendingApi } from "lib/api";

const HomeContainer = () => {
  const [trending, setTrending] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const getContentFromApi = async () => {
    try {
      const {
        data: { results: trending },
      } = await trendingApi.trending("all");
      setTrending(trending);
    } catch (e) {
      setError("해당 정보를 찾을 수 없습니다.");
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getContentFromApi();
  }, []);

  return <HomeViewer trending={trending} error={error} loading={loading} />;
};

export default HomeContainer;
