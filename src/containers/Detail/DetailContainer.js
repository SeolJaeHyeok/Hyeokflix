import React, { useState, useEffect } from "react";
import { movieApi, tvApi } from "../../lib/api";
import { useParams } from "react-router";
import DetailViewer from "components/Detail/DetailViewer";

const DetailContainer = ({ location }) => {
  const params = useParams();
  const { pathname } = location;

  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isMovie, setIsMovie] = useState(true);

  const getDetailDataFromApi = async () => {
    const parsedId = parseInt(params.id);

    if (isNaN(parsedId)) {
      return push("/");
    }

    let result = null;
    setIsMovie(pathname.includes("/movie/"));

    try {
      if (isMovie) {
        ({ data: result } = await movieApi.movieDetail(parsedId));
      } else {
        ({ data: result } = await tvApi.showDetail(parsedId));
      }
    } catch {
      setError("데이터를 찾을 수 없습니다.");
    } finally {
      setLoading(false);
      setResult(result);
    }
  };

  useEffect(() => {
    getDetailDataFromApi();
  }, []);
  return <DetailViewer result={result} error={error} loading={loading} />;
};

export default DetailContainer;
