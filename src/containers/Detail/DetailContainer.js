import React, { useState, useEffect } from "react";
import { movieApi, tvApi } from "../../lib/api";
import { useParams, withRouter } from "react-router";
import DetailViewer from "components/Detail/DetailViewer";

const DetailContainer = ({ match, location, history }) => {
  const params = useParams();
  const { pathname } = location;

  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isMovie, setIsMovie] = useState(null);

  const getDetailDataFromApi = async () => {
    const parsedId = parseInt(params.id);

    if (isNaN(parsedId)) {
      return history.push("/");
    }

    let result = null;
    setIsMovie(pathname.includes("/movie/"));

    try {
      if (isMovie) {
        ({ data: result } = await movieApi.movieDetail(parsedId));
      } else {
        ({ data: result } = await tvApi.showDetail(parsedId));
      }
      setResult(result);
    } catch {
      setError("데이터를 찾을 수 없습니다.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDetailDataFromApi();
  }, []);
  return <DetailViewer result={result} error={error} loading={loading} />;
};

export default withRouter(DetailContainer);
